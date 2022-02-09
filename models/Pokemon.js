const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: String },
    size: { type: Array },
    color: { type: Array },    
  },
//   { timestamps: true }
);

module.exports = mongoose.model("Pokemon", PokemonSchema);