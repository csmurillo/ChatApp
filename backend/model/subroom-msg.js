const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const subRoomMessageSchema = mongoose.Schema({
    room:{ type:ObjectId, ref: "SubRoom" },
    from:{ type:ObjectId, ref: "User" },
    to:{ type:ObjectId, ref: "User" },
    message:{ type: String, required:true }
});
module.exports = mongoose.model('SubRoomMessage', subRoomMessageSchema);