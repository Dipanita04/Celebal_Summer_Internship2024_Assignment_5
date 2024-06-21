const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tech: {
    type: String,
    required: true,
  },
  sub: {
    type: Boolean,
    required: true,
    default: false,
  },
  Address: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Record", recordSchema);
