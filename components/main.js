import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../components/navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../components/footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dev's Portfolio</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main