const mongoose = require("mongoose");


const PeekUserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor"
    }
});

const PeekUserModel = mongoose.model("users", PeekUserSchema);

module.exports = PeekUserModel;