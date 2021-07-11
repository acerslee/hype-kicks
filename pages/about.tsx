import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

const AboutPage = () => {

  return(
    <>
      <Navbar />
      <div className = "relative h-50v">
        <Image
          src = "/shoe.jpg"
          alt = "shoe collection"
          layout = 'fill'
          objectFit = 'cover'
        />
      </div>
        <section className = "w-3/4 flex flex-col justify-center mx-auto md:h-40v sm:h-50v sm: mb-5">
          <h1 className = "font-bold text-5xl my-4 border-b-4">About Us</h1>
          <p className = "mb-2 text-lg laptop:text-xl desktop:text-2xl">
            Hype Kicks is a sneaker database where fellow sneakerheads can search for their favorite brands, and explore for their next addition to their collection. We make the best effort to provide users the most up-to-date sneaker data to keep up with trending and upcoming shoes. Come see all our selections here!
          </p>
          <p className = "mb-2 text-lg laptop:text-xl desktop:text-2xl">Special thanks to the TG4 Solutions team for providing with the data.</p>
          <p className = "text-lg laptop:text-xl desktop:text-2xl">Hype Kicks is developed by Alex Lee.</p>
        </section>
      <Footer />
    </>
  )
};

export default AboutPage;