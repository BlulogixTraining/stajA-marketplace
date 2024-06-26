const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },

  addressline1: {
    type: String,
    required: true,
  },
  addressline2: {
    type: String,
  },

  country: {
    type: String,
  },

  state: {
    type: String,
  },

  zipcode: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;
