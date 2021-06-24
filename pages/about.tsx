import Navbar from '../components/navbar';

const AboutPage = () => {
  return(
    <>
      <Navbar />
      <div className = "w-4/5 flex flex-col justify-center mx-auto h-90v">
        <h1 className = "font-bold text-5xl mb-5 border-b-4">About Us</h1>
        <section className = "mb-2 text-lg">
          Hype Kicks is a sneaker database where fellow sneakerheads can search for their favorite brands, and explore for their next addition to their collection. We also make the best effort to provide users the most up-to-date sneaker data to keep up with trending and upcoming shoes.
        </section>
        <p className = "mb-2 text-lg">Special thanks to the TG4 Solutions team for providing with the data.</p>
        <p className = "text-lg">Hype Kicks is developed by Alex Lee.</p>
      </div>
    </>
  )
};

export default AboutPage;