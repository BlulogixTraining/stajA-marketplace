const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropertiesSchema = new Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  clothing: [
    {
      color: {
        type: [String],
      },
      size: {
        type: [String],
      },
    },
  ],
  mobiles: [
    {
      ram: {
        type: String,
      },
      internal_memory: {
        type: String,
      },
      camera: {
        type: String,
      },
      color: {
        type: [String],
      },
      batterypower: {
        type: String,
      },
      warrantyperiod: {
        type: String,
      },
    },
  ],
  computers: [
    {
      ram: {
        type: String,
      },

      ramtype: {
        type: String,
      },
      processor: {
        type: String,
      },

      color: {
        type: [String],
      },
      batterypower: {
        type: String,
      },
      ssdcapacity: {
        type: String,
      },
      warrantyperiod: {
        type: String,
      },
    },
  ],
});

const Property = mongoose.model("Propertie", PropertiesSchema);
module.exports = Property;
