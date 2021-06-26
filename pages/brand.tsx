import { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import axios from 'axios';
import Image from 'next/image';

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
        console.log(data)
        if (data.count === 0){
          setErrorMessage(true)
        } else setShoeData(data.results)
      })
      .catch(err => console.error(err))
  }, [])

  return(
    <>
      <Navbar />
      {!errorMessage && shoeData
        ?
        shoeData.map(shoe => (
          <div key = {shoe.id}>
            <p>{shoe.colorway}</p>
            <p>{shoe.gender}</p>
            {shoe.media.thumbUrl
              ?  <Image src = {shoe.media.thumbUrl} height = {100} width = {100} alt = "shoe" />
              :  <Image src = '/no-image.jpg' height = {100} width = {100} alt = "shoe" />
            }
          </div>
        ))
        : <p>Cannot find any shoes :/</p>
      }
      <Footer />
    </>
  )
}

export default Brandpage;