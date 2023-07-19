const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const UserModel = require("./models/PeekUser");
const routes = require("./routes/routes");

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

app.use('/', routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));