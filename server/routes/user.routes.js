const { deposit } = require("../controllers/user.controller");

const router = require("express").Router();


router.post("/deposit", deposit);

module.exports = router;
