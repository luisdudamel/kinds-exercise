require("dotenv").config();
const debug = require("debug")("kinds:server:controller:kind");
const chalk = require("chalk");
const Kind = require("../../database/models/Kind");

const getAllKinds = async (req, res) => {
  const kinds = await Kind.find();
  res.status(200).json({ kinds });
  debug(chalk.greenBright(`A get request to kinds database has been received`));
};

module.exports = { getAllKinds };
