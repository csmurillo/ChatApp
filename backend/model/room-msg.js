const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const roomMessageSchema = mongoose.Schema({
    room:{ type:ObjectId, ref: "Room" },
    from:{ type:ObjectId, ref: "User" },
    to:{ type:ObjectId, ref: "User" },
    message:{ type: String, required:true }
},{ timestamps:true });
module.exports = mongoose.model('RoomMessage', roomMessageSchema);