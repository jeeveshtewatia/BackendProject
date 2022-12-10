const express = require("express");

const data = require("../Contollers/data");

const dataRouter = express.Router();

dataRouter.route("/home").get(data);
module.exports = dataRouter;
