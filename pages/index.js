import Head from 'next/head'
import { Container, Box, Heading } from '@chakra-ui/react'
const Home = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a Web Developer and Open Source Enthusiast!
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Devkant Swargiary
          </Heading>
          <p>Failing frequently, staying convex</p>
        </Box>
        
      </Box>
      </Container>
  )
}
export default Home



        // {/* <div>
    //  / <Head>
          // <title>
            // Website
          // </title>
          // <meta name='keywords' content='web dev, programming, github'/>

          /* meta name consist of keywords for the seo */
    //   </Head>
    //     <h1>Welcome</h1>
    // </div> */}
    
    

    // everything should be inside the div 
  




// export const getStaticProps = async () => {
//   const res = await fetch()
//   const articles = await res.json()
