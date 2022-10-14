const express = require("express");

const server = require("../Contollers/data");

const dataRouter = express.Router();

dataRouter
  .route("/home")

  .get(server.apicontroller);
module.exports = dataRouter;
