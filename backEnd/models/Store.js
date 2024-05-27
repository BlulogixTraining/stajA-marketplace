const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  city: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Store = mongoose.model("Store", StoreSchema);
module.exports = Store;
