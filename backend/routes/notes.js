const express = require("express");
const router = express.router();

router.get("/", function (req, res) {
  obj = {
    name: "dharmesh",
    age: 20,
  };
  // resposne
  res.json(obj);
});

module.exports = router;
