import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* <h1>Shoe collection for anyone. Whether you're an enthusiast or a casual window shopper.</h1> */}
        <div className = "relative h-90v">
          <Image src ="/main-page-shoe.jpg" alt = "main page shoe" layout = 'fill' objectFit = 'cover' />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home;