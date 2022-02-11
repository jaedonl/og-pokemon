import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema(
  {
    abilities: { type: Object },    
    base_experience: { type: Number },
    forms: { type: Array, },
    game_indices: { type: Array },
    height: { type: Number },
    held_items: { type: Array },    
    id: { type: Number },    
    is_default: { type: Boolean },  
    location_area_encounters: { type: String },  
    moves: { type: Array },  
    name: { type: String, required: true, unique: true },  
    order: { type: Number },  
    past_types: { type: Array },  
    species: { type: Object },  
    sprites: { type: Object },  
    stats: { type: Array },  
    types: { type: Array },  
    weight: { type: Number },  
  },
  { timestamps: true }
); 

export default mongoose.models.Pokemon || mongoose.model("Pokemon", PokemonSchema);