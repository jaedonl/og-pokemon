// import axios from 'axios'
import dbConnect from '../../util/mongo'
import Pokemon from '../../models/Pokemon'

export default async function handler(req, res) {
  const {method} = req
  dbConnect();

  if (method === "GET") {
    try {
      const pokemon = await Pokemon.find({})
      res.status(200).json(pokemon)

    } catch(error) {
        res.status(500).json(error)
    }
  }

  if(method === "POST") {
    // try {      // create method
    //   const pokemon = await Pokemon.create(req.body)
    //   res.status(200).json(pokemon)

    // } catch (error) {
    //   res.status(500).json(error)
    // }
    const newPokemon = new Pokemon(req.body)
    try {
      const savedPokemon = await newPokemon.save()
      res.status(200).json(savedPokemon)
    } catch (error) {
      res.status(500).json(error)
    }
  }




  // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=50`)
  // res.status(200).json('my pokemon')
}
