const Order = require("../models/order.model");
const User = require("../models/user.model");

const createOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      balance: req.body.balance,
      type: req.body.type,
      ...req.body,
    });

    await User.findByIdAndUpdate(
      req.body.userId,
      { $inc: { wallet: -req.body.price } },
      { new: true }
    );

    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getUserOrders = async (req, res) => {
  try {
    console.log(req.params.userId);
    const orders = await Order.find({ userId: req.params.userId }).sort({
      createdAt: -1,
    });
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { createOrder, getUserOrders };
