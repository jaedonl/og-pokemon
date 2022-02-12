import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema(
  {
    abilities: { type: Object },    
    height: { type: Number },
    id: { type: Number },    
    moves: { type: Array },  
    name: { type: String, required: true, unique: true },  
    order: { type: Number },  
    sprites: { type: Object },  
    stats: { type: Array },  
    types: { type: Array },  
  },
  { timestamps: true }
); 

export default mongoose.models.Pokemon || mongoose.model("Pokemon", PokemonSchema);