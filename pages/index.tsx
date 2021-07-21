import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

const Home = () => {

  const [ newestSet, setNewestSet ] = useState<(string | number)[]>([]);

  useEffect(() => {
    axios
      .get('/api/newest')
      .then(({data}) => {
        setNewestSet(data.results)
      })
      .catch(err => console.error(err))
  },[])

  return (
    <main className = "h-full text-center">
      <div className = "relative h-60v laptop:h-90v ">
        <Image src ="/main-page-shoe.jpg" alt = "main page shoe" layout = 'fill' objectFit = 'cover' />
      </div>
      <div className = "absolute bottom-45/100 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-orange-main-page text-4xl font-bold laptop:text-6xl laptop:top-2/4">Explore Your Next Addition.</div>
      {newestSet.length !== 0 &&
        <section id = "newest-shoes">
          <h1 className = "text-4xl text-gray-600 text-center mb-4 desktop:text-3xl desktop:text-left desktop:ml-2">Today's Releases</h1>
          <div className = "grid grid-cols-1 gap-2 mx-2 mb-2 desktop:grid-cols-5 laptop:grid-cols-3 phone:gap-5 phone:grid-cols-2">
            {newestSet.slice(0,5).map((shoe: any) => (
              <div key = {shoe.id} className = "bg-gray-50 text-left">
                <div className = "relative h-20v">
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
            {newestSet.length > 5 &&
              <Link href = '/newest'>
                <p className = "text-center text-gray-500 mr-4 hover:text-blue-600 cursor-pointer desktop:text-right">SEE MORE</p>
              </Link>
            }
        </section>
      }
    </main>
  )
}

export default Home;