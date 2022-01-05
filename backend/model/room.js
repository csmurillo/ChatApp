const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const roomSchema = mongoose.Schema({
    admin:{ type:ObjectId, ref: "User" },
    roomName:{ type: String, required:true },
    users:[{type:ObjectId, ref: "User"}]
});
module.exports = mongoose.model('Room', roomSchema);
