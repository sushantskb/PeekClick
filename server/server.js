const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/PeekUser");


const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"], // allow to server to accept request
    methods: ["GET", "POST"],
    credentials:true,
}));
app.use(cookieParser());
const port = 3001;

//database connection
mongoose.connect("mongodb://0.0.0.0:27017/PeekUserDb",()=>{
    console.log("connected to database!");
});

//post method for register
app.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ username, email, password: hash })
                .then(user => res.json("Success"))
                .catch(err => res.json(err))
        }).catch(err => {
            res.json(err)
        });
});

//login rote
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username: username })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ username: user.username, role: user.role },
                            "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie("token", token);
                        return res.json({Status: "Success", role: user.role});
                    } else {
                        return res.json("The password is incorrect");
                    }
                });
            } else {
                return res.json("No records existed");
            }
        })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));