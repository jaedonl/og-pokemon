import axios from 'axios'

export default async function handler(req, res) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`)
  res.status(200).json(response.data)
}
