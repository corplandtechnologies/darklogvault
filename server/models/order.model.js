const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderModel = new Schema({
  balance: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  extractionPrice: {
    type: Number,
    default: 300,
  },
  isExtracted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Order", OrderModel);
