import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

const AboutPage = () => {
  return(
    <>
      <Navbar />
      <Image src = "/shoe-collection-crop.jpg" alt = "shoe collection" height = {400} width = {1400}/>
      <div className = "w-3/4 flex flex-col justify-center mx-auto lg:h-40v sm:h-50v">
        <h1 className = "font-bold text-5xl mb-5 border-b-4 sm: mt-6">About Us</h1>
        <section className = "mb-2 text-lg">
          Hype Kicks is a sneaker database where fellow sneakerheads can search for their favorite brands, and explore for their next addition to their collection. We make the best effort to provide users the most up-to-date sneaker data to keep up with trending and upcoming shoes. Come see all our selections here!
        </section>
        <p className = "mb-2 text-lg">Special thanks to the TG4 Solutions team for providing with the data.</p>
        <p className = "text-lg">Hype Kicks is developed by Alex Lee.</p>
      </div>
      <Footer />
    </>
  )
};

export default AboutPage;