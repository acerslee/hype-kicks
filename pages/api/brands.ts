import axios from "axios"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = "https://v1-sneakers.p.rapidapi.com/v1/brands"

  const headers = {
    "x-rapidapi-key": process.env.KEY
  }

  await axios
    .get(url, {headers})
    .then(({data}) => {
      res.send(data)
    })
    .catch(err => {
      // console.log(err)
      res.status(500).send(err)
    })
}