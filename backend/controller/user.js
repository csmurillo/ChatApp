const bcrypt = require('bcrypt');
const User = require('../model/user');
const jsonwebtoken = require('jsonwebtoken');

exports.signup = (req,res) =>{
    bcrypt.hash( req.body.password,10)
        .then(hash=>{
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result=>{
                    res.status(201).json({
                        message:"User is created",
                        result: result
                    });
                })
                .catch(err=>{
                    res.status(500).json({error:err});
                });
        });
};
exports.login = (req,res) =>{
    let user;
    User.findOne({email:req.body.email})
    .then((authenticatedUser)=>{
        if(authenticatedUser){
            user=authenticatedUser;
            return bcrypt.compare(req.body.password,authenticatedUser.password);
        }
        else{
            return res.status(401).json({message:"email not found"});
        }
    })
    .then(bcryptBool=>{
        if(bcryptBool){
            const token = jsonwebtoken.sign(
                {email:user.email, userId:user._id},
                "secret-password",
                {expiresIn: "1h"}
            );
            
            res.status(200).json({
                token,
                user:{id:user._id,username:user.username,email:user.email},
                message:"success token created"
            });
        }
        else{
            return res.status(401).json({message:"user password provided is wrong"});
        }
    })
    .catch(err=>{
        return res.status(401).json({message:"error:"+err});
    });
};