import { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import axios from 'axios';

interface Props{
  query: object
}

const Brandpage: React.FC<Props> = ({query}) => {

  const [ shoeData, setShoeData ] = useState<any>(null);
  const [ errorMessage, setErrorMessage ] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get(`/api/shoes/${query.brand}`)
      .then(({data}) => {
        if (data.count === 0){
          setErrorMessage(true)
        } else setShoeData(data.results)
      })
      .catch(err => console.error(err))
  }, [])

  return(
    <>
      <Navbar />
      {!errorMessage
        ? <p>placeholder</p>
        : <p>Cannot find any shoes :/</p>
      }
      <Footer />
    </>
  )
}

export default Brandpage;