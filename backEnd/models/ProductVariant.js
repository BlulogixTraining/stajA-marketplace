const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductVariantSchema = new Schema({
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },

  ram: {
    type: String,
  },
  ramtype: {
    type: String,
  },
  processor: {
    type: String,
  },
  internalmemory: {
    type: String,
  },
  camera: {
    type: String,
  },
  batterypower: {
    type: String,
  },
  warrantyperiod: {
    type: String,
  },

  ssdcapacity: {
    type: String,
  },

  style: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductVariant = mongoose.model("ProductVariant", ProductVariantSchema);
module.exports = ProductVariant;
