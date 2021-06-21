import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';

export default function Home() {
  // const [basketballData, setBasketballData] = useState<any>(null)

  useEffect(() => {
    axios.get('/api/teams')
      .then(({data}) => {
        console.log(data.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
    <div>
      <Navbar />
      dd
    </div>
    </>
  )
}
