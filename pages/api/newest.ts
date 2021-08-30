import axios from "axios"
import Redis from "redis"
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {

  const todayDate = new Date().toISOString().slice(0,10);

  const redisClient = Redis.createClient()
  const DEFAULT_EXPIRATION = 3600;

  const url = `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&releaseDate=${todayDate}`

  const headers = {
    "x-rapidapi-key": process.env.KEY
  }

  redisClient.get('newest', async (error, newest) => {
    if (error) console.error(error)
    if (newest) {
      res.send(JSON.parse(newest))
    } else {
        await axios
          .get(url, {headers})
          .then(({data}) => {
            redisClient.setex("newest", DEFAULT_EXPIRATION, JSON.stringify(data))
            res.send(data)
          })
          .catch(err => {
            res.status(500).send(err)
          })
    }
  })

}