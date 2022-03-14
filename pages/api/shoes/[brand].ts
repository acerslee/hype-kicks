import axios from 'axios'
import Redis from 'redis'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { brand } = req.query
  const { year } = req.body

  const redisClient = Redis.createClient(process.env.REDIS_URL)
  const DEFAULT_EXPIRATION = 3600

  let url: string
  if (!req.body)
    url = `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&releaseYear=2021&brand=${brand}`
  else
    url = `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&releaseYear=${year}&brand=${brand}`

  const headers = {
    'x-rapidapi-key': process.env.KEY,
  }

  redisClient.get(
    `brandList?brand=${brand}&year=${year}`,
    async (error, shoe) => {
      if (error) console.error(error)
      if (shoe) {
        res.send(JSON.parse(shoe))
      } else {
        await axios
          .get(url, { headers })
          .then(({ data }) => {
            redisClient.setex(
              `brandList?brand=${brand}&year=${year}`,
              DEFAULT_EXPIRATION,
              JSON.stringify(data),
            )
            res.send(data)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send(err)
          })
      }
    },
  )
}
