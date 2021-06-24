import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';

const TeamPage = ({ query }) => {

  const [teamData, setTeamData] = useState<object>({})

  useEffect(() => {
    axios.all([
      axios.get('/api/players/players'),
      axios.get(`/api/teams/${query.id}`)
    ])
      .then(responses => {
        console.log(responses)
        setTeamData(responses[1].data)
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