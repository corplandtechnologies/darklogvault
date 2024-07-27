const { deposit, getUserById } = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/deposit", deposit);
router.get("/:id", getUserById);

module.exports = router;
