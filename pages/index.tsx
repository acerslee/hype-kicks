import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Teams from '../components/nbaTeams';

export default function Home() {
  const [teamData, setTeamData] = useState<any>(null)

  useEffect(() => {
    axios.get('/api/teams')
      .then(({data}) => {
        console.log(data.data)
        setTeamData(data.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Navbar />
      <Teams teams = {teamData}/>
    </>
  )
}
