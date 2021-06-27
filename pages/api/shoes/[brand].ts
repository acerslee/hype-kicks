import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { brand } = req.query;
  let url;

  if (!req.body) {
    url = `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&releaseYear=2021&brand=${brand}`
  } else {
    url = `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&releaseYear=${req.body.year}&brand=${brand}`
  }

  const headers = {
    "x-rapidapi-key": process.env.KEY
  }

  await axios
    .get(url, {headers})
    .then(({data}) => {
      res.send(data)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
}
