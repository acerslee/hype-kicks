import 'tailwindcss/tailwind.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
         <title>NBA</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="See the stats of NBA players and teams."></meta>
          <meta charSet="UTF-8"></meta>
          <meta name="msapplication-TileColor" content="#1A1E22" />
          <meta name="theme-color" content="#0070f3" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
