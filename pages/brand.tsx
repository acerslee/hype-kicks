import Navbar from '../components/navbar';
import Footer from '../components/footer';
import React from 'react';

interface Props{
  query: object
}

const Brandpage: React.FC<Props> = ({query}) => {

  console.log(query)
  return(
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default Brandpage;