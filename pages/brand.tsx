import { useState, useEffect } from 'react';
import Search from '../components/search';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import axios from 'axios';
import Image from 'next/image';

interface Query{
  brand: string
}

interface Props{
  query: Query
}

const Brandpage: React.FC<Props> = ({query}) => {

  const [ shoeData, setShoeData ] = useState<any>([]);
  const [ errorMessage, setErrorMessage ] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get(`/api/shoes/${query.brand}`)
      .then(({data}) => {
        if (data.count === 0){
          setErrorMessage(true)
        } else {
          setShoeData(data.results)
        }
      })
      .catch(err => console.error(err))
  }, [query])


  const renderNewList = async (gender: string = "none", year: string = "none") => {
    if (gender !== "none" && year !== "none") {
      const response = await axios.post(`/api/shoes/${query.brand}`, {year})
      const shoeResults = await response.data.results;
      const shoeResultFilter = await shoeResults.filter((shoe: {gender: string}) => shoe.gender === gender)
      setShoeData(shoeResultFilter)
      return
    }

    if (gender !== "none") {
      const results = shoeData.filter((shoe: {gender: string}) => shoe.gender === gender);
      setShoeData(results)
    }

    if (year !== "none") {
      const response = await axios.post(`/api/shoes/${query.brand}`, {year})
      setShoeData(response.data.results)
    }
  };

  return(
    <>
      <Navbar />
      <Search renderNewList = {renderNewList}/>
      {!errorMessage && shoeData &&
        <div className = "grid grid-cols-2 gap-7 w-11/12 mb-4 mx-auto lg:grid-cols-4 md:grid-cols-3 md:gap-5">
          {shoeData.map((shoe: any) => (
            <div key = {shoe.id} className = "bg-gray-50">
              <div className = "relative h-30v">
                {shoe.media.imageUrl
                  ?  <Image
                        src = {shoe.media.imageUrl}
                        layout = 'fill'
                        objectFit = 'cover'
                        alt = "shoe"
                      />
                  :  <Image
                        src = '/no-image.jpg'
                        layout = 'fill'
                        objectFit = 'cover'
                        alt = "shoe"
                      />
                }
              </div>
              <div className = "ml-3">
                <p>Release Date: {shoe.releaseDate}</p>
                <p>{shoe.title}</p>
                <p className = "text-gray-500">{shoe.colorway}</p>
                <p className = "text-gray-500">{shoe.gender}</p>
                <p className = "mt-2">${shoe.retailPrice}</p>
              </div>
            </div>
          ))}
        </div>
      }
      {!errorMessage && !shoeData &&
        <p className = "h-4/5 text-center">Loading</p>
      }
      {errorMessage &&
        <p className = "h-4/5 text-center">Sorry, no shoes available at the moment!</p>
      }
      <Footer />
    </>
  )
}

export default Brandpage;