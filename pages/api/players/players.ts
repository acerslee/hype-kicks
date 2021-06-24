import axios from "axios"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = "https://api.thesneakerdatabase.dev/v2/sneakers"

  await axios
    .get(url)
    .then(({data}) => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
}

