const User = require("../models/user.model");
const deposit = async (req, res) => {
  const { amount } = req.body;
  // Simulate fetching a BTC wallet address
  const btcAddress = "bc1qt6hzhtum0enst6khak06jdpzcp6th77k4te474";
  // Simulate conversion rate
  const conversionRate = 0.000018; // Example rate: 1 USD = 0.000023 BTC
  const equivalentBTC = parseFloat(amount) * conversionRate;
  // Generate a QR code URL for the BTC address
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${btcAddress}&size=100x100`;
  // Time left before the deposit expires, in minutes
  const timeLeft = 30;

  res.json({
    btcAddress,
    equivalentBTC,
    qrCodeURL,
    timeLeft,
    message: "Send BTC to only this address",
  });
};

const updateUserWallet = async (userId, amount) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $inc: { wallet: amount } },
    { new: true }
  );
  return updatedUser;
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  deposit,
  updateUserWallet,
  getUserById,
};
