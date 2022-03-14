import type { NextPage } from 'next'
import Image from 'next/image'

const AboutPage: NextPage = () => {
  return (
    <>
      <div className="relative h-40v w-full">
        <Image src="/shoe.jpg" alt="shoe collection" layout="fill" objectFit="cover" priority />
      </div>
      <article className="w-3/4 flex flex-col justify-center mx-auto h-60v mb-5 laptop:h-40v">
        <h2 className="font-bold text-5xl my-4 border-b-4">About Us</h2>
        <p className="mb-2 text-lg laptop:text-xl desktop:text-2xl">
          Hype Kicks is a sneaker database where fellow sneakerheads can search for their favorite
          brands, and explore for their next addition to their collection. We make the best effort
          to provide users the most up-to-date sneaker data to keep up with trending and upcoming
          shoes. Come see all our selections here!
        </p>
        <p className="mb-2 text-lg laptop:text-xl desktop:text-2xl">
          Special thanks to the TG4 Solutions team for providing with the data.
        </p>
        <p className="text-lg laptop:text-xl desktop:text-2xl">
          Hype Kicks is developed by Alex Lee.
        </p>
      </article>
    </>
  )
}

export default AboutPage
