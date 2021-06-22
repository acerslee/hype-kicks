import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Teams from '../components/nbaTeams';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  const [teamData, setTeamData] = useState<any>(null)

  useEffect(() => {
    axios.get('/api/teams')
      .then(({data}) => {
        console.log(data.data)
        setTeamData(data.data)
      })
      .catch(err => console.error(err))
  }, [])

  const renderTeamPage = (id: number) => {
    router.push({
      pathname: '/teams',
      query: { id }
    })
  };

  return (
    <>
      <Navbar />
      {teamData &&
        <Teams
          teams = {teamData}
          renderTeamPage = {renderTeamPage}
        />
      }
    </>
  )
}
