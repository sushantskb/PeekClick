const app = require("express")();

const controller = require("../controllers/peekClick.controller");


app.post("/register", controller.register);

app.post("/login", controller.login);

module.exports = app;