import axios from "axios";

export async function getPokemonList() {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200');  
  return res.data
} 

export async function getPokemonDetail(userInput) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`);  
  return res.data
} 

export function getPokeImageUrl(userInput) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${userInput}.png`
} 
