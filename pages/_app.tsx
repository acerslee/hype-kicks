import '../styles/globals.css';
import App from 'next/app'
import { AuthContextProvider } from '../netlify/authContext';
import SEO from '../components/seo';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

type AppProps<P = any> = {
  Component: P;
  ctx: P;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppProps) {
    let pageProps = { query: String };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return(
      <AuthContextProvider>
        <SEO path = {this.props.router.asPath}/>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
    </AuthContextProvider>
    )
  }
}

export default MyApp;