const Order = require("../models/order.model");

const createOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      balance: req.body.balance,
      type: req.body.type,
    });

    await newOrder.save();
  } catch (error) {
    console.log(error);
  }
};
