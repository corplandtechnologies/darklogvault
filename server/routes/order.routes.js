const { createOrder } = require("../controllers/order.controller");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, createOrder);

module.exports = router;
