const mongoose = require("mongoose");

const keyboardSchema = new mongoose.Schema({
  theme: {
    type: String,
  },
  connection: {
    type: String,
  },

  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});

const Keyboard = mongoose.model("Keyboard", keyboardSchema);
module.exports = Keyboard;
