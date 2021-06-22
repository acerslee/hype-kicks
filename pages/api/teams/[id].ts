import axios from "axios"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const teamId = req.query.id
  const url = `https://www.balldontlie.io/api/v1/teams/${teamId}`

  await axios
    .get(url)
    .then(({data}) => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

