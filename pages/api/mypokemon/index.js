import dbConnect from '../../../util/mongo'
import Pokemon from '../../../models/Pokemon'

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
    try {
      const pokemon = await Pokemon.create(req.body)
      res.status(200).json(pokemon)

    } catch (error) {
      res.status(500).json(error) 
    }
  }
}
