const {
  registerAdmin,
  loginAdmin,
  addMoneyToUserWallet,
} = require("../controllers/admin.controller");

const router = require("express").Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);

router.post("/add-money", addMoneyToUserWallet);
module.exports = router;
