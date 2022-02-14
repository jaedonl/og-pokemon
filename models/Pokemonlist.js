import mongoose from "mongoose";

const PokemonlistSchema = new mongoose.Schema(
  {
    pokemonList: {    
        count: { type: Number },   
        results: [
          { name: String },
          { url: String}
        ],
    },  
  }, 
); 

export default mongoose.models.Pokemonlist || mongoose.model("Pokemonlist", PokemonlistSchema); 