const mongoose = require("mongoose"),
  chalk = require("chalk"),
  URI = process.env.MONGODB_URI;

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true  })
  .then(db => console.log(chalk.bgGreen.black("DB is connected")))
  .catch(err => console.error(chalk.bgRed.white(err)));

module.exports = mongoose;
