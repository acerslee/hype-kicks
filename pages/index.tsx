import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
// import Brands from '../components/Brands';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  const [brands, setBrands] = useState<any>(null)

  useEffect(() => {
    axios.get('/api/brands')
      .then(({data}) => {
        console.log(data.results)
        setBrands(data.results)
      })
      .catch(err => console.error(err))
  }, [])

  const renderTeamPage = (id: number) => {
    router.push({
      pathname: '/brands',
      query: { id }
    })
  };

  return (
    <>
      <Navbar />
      {/* {teamData &&
        <Brands
          teams = {teamData}
          renderTeamPage = {renderTeamPage}
        />
      } */}
    </>
  )
}
