const {
  createOrder,
  getUserOrders,
} = require("../controllers/order.controller");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post("/", createOrder);
router.get("/:userId", getUserOrders);

module.exports = router;
