const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  NameOnCard: {
    type: String,
  },
  CardValidationDate: {
    type: Number,
  },
  ccv: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;
