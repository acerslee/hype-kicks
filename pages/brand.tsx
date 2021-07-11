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

  //for mobile view only
  const [itemsToShow, setItemsToShow] = useState<number>(10);

  useEffect(() => {
    axios
      .get(`/api/shoes/${query.brand}`)
      .then(({data}) => {
        if (data.count === 0){
          setErrorMessage(true)
        } else {
          setErrorMessage(false)
          setShoeData(data.results)
        }
      })
      .catch(err => console.error(err))
  }, [query.brand])

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

  //for mobile view only
  // const showMoreLoader = () => {
  //   setShoeData(shoeData.slice(0, itemsToShow + 10))
  //   setItemsToShow(itemsToShow + 10)
  // };

  // useEffect(() => {
  //   if (window.screen.width < 750) {
  //     let slicedShoeData = shoeData.slice(0,10)
  //     setShoeData(slicedShoeData)
  //     setItemsToShow(10)
  //   }
  // }, [shoeData])


  return(
    <>
      <Navbar />
      <Search renderNewList = {renderNewList}/>
      {shoeData.length > 0 &&
        <div className = "grid grid-cols-1 gap-7 w-11/12 mb-4 mx-auto laptop:grid-cols-2 laptop:gap-4 desktop:grid-cols-4 ">
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

      {errorMessage &&
        <div className = "h-80v flex justify-center items-center">
          <p className = "text-xl laptop:text-2xl desktop:text-4xl">Sorry, no shoes available at the moment!</p>
        </div>
      }
      <Footer />
    </>
  )
}

export default Brandpage;