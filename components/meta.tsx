import Head from 'next/head'
import path from '../lib/basePath'

const Meta = () => {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={path("/favicon/favicon-32x32.png")}
      />
      <link rel="shortcut icon" href={path("/favicon/favicon.ico")} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`blog`}
      />
    </Head>
  )
}

export default Meta
