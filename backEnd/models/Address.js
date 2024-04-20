const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
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

  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Address = mongoose.model("Address", AddressSchema);
module.exports = Address;
