const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    name: String,
    email: String,
    message:String
});

const ContactModel = new mongoose.model("message", ContactSchema);

module.exports = ContactModel;