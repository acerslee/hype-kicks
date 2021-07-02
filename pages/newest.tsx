import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import axios from 'axios';
import Image from 'next/image';

const NewestShoes = () => {

  const [ newestSet, setNewestSet ] = useState<(string | number)[]>([]);

  useEffect(() => {
    axios
      .get('/api/newest')
      .then(({data}) => setNewestSet(data.results))
      .catch(err => console.error(err))
  },[])

  return(
    <>
    <Navbar />
    <h1 className = "text-sm text-gray-600 lg:text-3xl md: text-base">Today's Releases</h1>
    <div className = "grid grid-cols-2 gap-7 w-11/12 mb-4 mx-auto lg:grid-cols-4 md:grid-cols-3 md:gap-5">
          {newestSet.map((shoe: any) => (
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
    <Footer />
    </>
  )
};

export default NewestShoes;