import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
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

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}
