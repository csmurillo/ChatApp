const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const subRoomSchema = mongoose.Schema({
    admin:{ type:ObjectId, ref: "User" },
    room:{ type:ObjectId, ref: "Room" },
    subRoomName:{ type: String, required:true },
    users:[{type:ObjectId, ref: "User"}]
});
module.exports = mongoose.model('SubRoom', subRoomSchema);