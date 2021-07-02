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
        console.log(data)
        setNewestSet(data.results)
      })
      .catch(err => console.error(err))
  },[])

  return (
    <>
      <Navbar />
      <main className = "h-full">
        <div className = "relative h-90v">
          <Image src ="/main-page-shoe.jpg" alt = "main page shoe" layout = 'fill' objectFit = 'cover' />
        </div>
        <h1 className = "absolute inset-0 m-auto text-orange-main-page text-xl h-0 w-0 font-bold lg:text-6xl">Explore Your Next Addition To Your Collection.</h1>
        <section>
          <h1 className = "text-sm text-gray-600 lg:text-3xl md: text-base">Today's Releases</h1>
          <div className = "grid grid-cols-2 gap-2 mx-auto lg:grid-cols-5 md:grid-cols-3 md:gap-5">
            {newestSet.slice(0,5).map((shoe: any) => (
              <div key = {shoe.id} className = "bg-gray-50">
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
            <Link href = '/newest'>
              <a className = "text-right hover:text-blue-600 cursor-pointer">SEE MORE</a>
            </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home;