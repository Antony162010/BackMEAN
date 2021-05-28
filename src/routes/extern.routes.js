const router = require("express").Router();

const externController = require("../controllers/apis/extern.controller");

router
  .post(
    "/",
    externController.sendMessage
  );

module.exports = router;
