import { useState, useEffect } from 'react';
import Search from '../components/search';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import axios from 'axios';
import Image from 'next/image';

interface Props{
  query: object
}

const Brandpage: React.FC<Props> = ({query}) => {

  const [ shoeData, setShoeData ] = useState<any>([]);
  const [ errorMessage, setErrorMessage ] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get(`/api/shoes/${query.brand}`)
      .then(({data}) => {
        console.log(data)
        if (data.count === 0){
          setErrorMessage(true)
        } else {
          setShoeData(data.results)
        }
      })
      .catch(err => console.error(err))
  }, [query])


  const renderNewList = async (gender: string = "none", year: string = "none") => {
    console.log(gender, year)

    if (gender !== "none" && year !== "none") {
      console.log('is this running?')
      const response = await axios.post(`/api/shoes/${query.brand}`, {year})
      const shoeResults = await response.data.results;
      const shoeResultFilter = await shoeResults.filter((shoe: {gender: string}) => shoe.gender === gender)
      setShoeData(shoeResultFilter)
      return
    }

    if (gender !== "none") {
      let results = shoeData.filter((shoe: {gender: string}) => shoe.gender === gender);
      setShoeData(results)
    }

    if (year !== "none") {
      console.log(year)
      const response = await axios.post(`/api/shoes/${query.brand}`, {year})
      setShoeData(response.data.results)
    }
  };

  return(
    <>
      <Navbar />
      <Search renderNewList = {renderNewList}/>
      {!errorMessage && shoeData &&
        <div className = "grid grid-cols-3 gap-3 w-4/5 bg">
          {shoeData.map((shoe: any) => (
            <div key = {shoe.id} className = "bg-gray-100 w-auto">
              {shoe.media.imageUrl
                ?  <Image src = {shoe.media.imageUrl} height = {300} width = {300} alt = "shoe" />
                :  <Image src = '/no-image.jpg' height = {300} width = {300} alt = "shoe" />
              }
              <div className = "ml-3">
                <p>Release Date: {shoe.releaseDate}</p>
                <p>{shoe.colorway}</p>
                <p>{shoe.title}</p>
                {/* remove this line once you figure out the search filtering is working */}
                <p>{shoe.gender}</p>
                <p className = "mt-2">${shoe.retailPrice}</p>
              </div>
            </div>
          ))}
        </div>
      }
      {!errorMessage && !shoeData &&
        <h1>Loading</h1>
      }
      {errorMessage &&
        <p className = "h-4/5 text-center">Sorry, no shoes available at the moment!</p>
      }
      <Footer />
    </>
  )
}

export default Brandpage;