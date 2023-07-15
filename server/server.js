const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/PeekUser");


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port = 3001;

//database connection
mongoose.connect("mongodb://0.0.0.0:27017/PeekUserDb");

//post method for register
app.post("/register", async(req, res)=>{
    const {username, email, password} = req.body;
    console.log(username, email, password);
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({username, email, password: hash})
        .then(user=> res.json("Sucess"))
        .catch(err => res.json(err))
    }).catch(err => {
        res.json(err)
    });
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));