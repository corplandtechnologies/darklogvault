const User = require("../models/user.model");
const Admin = require("../models/admin.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { updateUserWallet } = require("./user.controller");

const registerAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const admin = await Admin.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ admin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ AdminId: admin._id }, process.env.JWT_SECRET);

    res
      .status(200)
      .json({ admin, token, message: "Admin logged In Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const addMoneyToUserWallet = async (req, res) => {
  try {
    const { email, amount } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const updatedUser = await updateUserWallet(user._id, amount);
    res
      .status(200)
      .json({ message: "Money added successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  addMoneyToUserWallet,
};
