const app = require("express")();

const controller = require("../controllers/peekClick.controller");


app.post("/register", controller.register);

app.post("/login", controller.login);

app.post("/contact", controller.contact);

module.exports = app;