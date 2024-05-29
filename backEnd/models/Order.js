const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },

      discount: {
        type: Number,
        required: true,
        default: 0,
      },

      total: {
        type: Number,
        required: true,
      },
    },
  ],
  subtotal: {
    type: Number,
    required: true,
  },

  totalDiscount: {
    type: Number,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },

  address: {
    type: Object,
    required: true,
    properties: {
      name: { type: String, required: true },
      addressline1: { type: String, required: true },
      addressline2: { type: String },
      country: { type: String, required: true },
      state: { type: String, required: true },
      zipcode: { type: Number, required: true },
    },
  },
  payment: {
    type: Object,
    required: true,
    properties: {
      cardNumber: { type: Number, required: true },
      nameOnCard: { type: String, required: true },
      cardValidationDate: { type: Number, required: true },
      ccv: { type: Number, required: true },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
