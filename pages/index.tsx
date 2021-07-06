import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
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
    <>
      <Navbar />
      <main className = "h-full text-center">
        <div className = "relative h-90v">
          <Image src ="/main-page-shoe.jpg" alt = "main page shoe" layout = 'fill' objectFit = 'cover' />
        </div>
        <div className = "absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-orange-main-page text-xl font-bold lg:text-6xl">Explore Your Next Addition.</div>
        {newestSet.length !== 0 &&
          <section id = "newest-shoes">
            <h1 className = "text-lg text-gray-600 text-center lg:text-3xl lg:text-left lg:ml-2 md:text-base">Today's Releases</h1>
            <div className = "grid grid-cols-2 gap-2 mx-auto lg:grid-cols-5 md:grid-cols-3 md:gap-5">
              {newestSet.slice(5).map((shoe: any) => (
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
                  <p className = "text-right text-gray-500 mr-4 hover:text-blue-600 cursor-pointer">SEE MORE</p>
                </Link>
              }
          </section>
        }
      </main>
      <Footer />
    </>
  )
}

export default Home;