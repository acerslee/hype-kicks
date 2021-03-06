import Head from 'next/head'
import React, { FC } from 'react'

interface Props {
  path: string
}

const SEO: FC<Props> = path => {
  const dynamicTitle = (route: string): string => {
    if (route === '/') return 'Home | Hype Kicks'
    if (route === '/about') return 'About | Hype Kicks'
    if (route.includes('/brand'))
      return route.charAt(13).toUpperCase() + route.slice(14) + ' | Hype Kicks'
  }

  return (
    <Head>
      <title>{dynamicTitle(path.path)}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="See your favorite shoes in this database for the sneak enthusiasts!"
      ></meta>
      <meta charSet="UTF-8"></meta>
      <meta name="msapplication-TileColor" content="#1A1E22" />
      <meta name="theme-color" content="#0070f3" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}

export default SEO
