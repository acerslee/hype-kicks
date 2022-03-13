import '../styles/globals.css'
import { AuthContextProvider } from '../netlify/authContext'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { NextPage } from 'next'

type AppProps<P = any> = {
  Component: P
  pageProps: P
  router: P
}

// class MyApp extends App {

//   render() {
//     const { Component, pageProps } = this.props
//     return(
//       <AuthContextProvider>
//         <SEO path = {this.props.router.asPath}/>
//         <Navbar />
//         <Component {...pageProps} />
//         <Footer />
//       </AuthContextProvider>
//     )
//   }
// }

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <AuthContextProvider>
      <SEO path = {router.asPath}/>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </AuthContextProvider>
  )
}

export default MyApp
