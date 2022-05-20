require("dotenv").config();
const express = require("express");
const { getAllKinds } = require("../controllers/kindsController");

const kindsRouter = express.Router();

kindsRouter.get("/list", getAllKinds);

module.exports = { kindsRouter };
