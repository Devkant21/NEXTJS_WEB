import Head from 'next/head'
export default function Home() {
  return (
    <div>
      <Head>
          <title>
            Website
          </title>
          <meta name='keywords' content='web dev, programming, github'/>

          {/* meta name consist of keywords for the seo */}
      </Head>
        <h1>Welcome</h1>
    </div>

    // everything should be inside the div 
  )
}


// export const getStaticProps = async () => {
//   const res = await fetch()
//   const articles = await res.json()
