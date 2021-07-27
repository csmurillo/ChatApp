const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoute = require('./routes/user');

// middleware
app.use(express.json());


app.use('/api/user', userRoute);


mongoose.connect('mongodb+srv://<privilegeduser>:<password>@cluster0.cjkig.mongodb.net/okok?retryWrites=true&w=majority')
    .then(()=>{
        console.log('connected')
    })
    .catch(()=>{
        console.log('error');
    });

const port = process.env.PORT || 3000;




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});