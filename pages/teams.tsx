import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';

const TeamPage = ({ query }) => {

  const [teamData, setTeamData] = useState<object>({})

  useEffect(() => {
    axios.get(`/api/teams/${query.id}`)
      .then(({data}) => {
        console.log(data)
        setTeamData(data)
      })
      .catch(err => console.error(err))
  },[])

  return(
    <div>
      <Navbar />
    </div>
  )
}

export default TeamPage;