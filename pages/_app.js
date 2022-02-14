import Layout from '../components/Layout'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route}/>
      </Layout>
    </ChakraProvider>
  )
}
 
export default MyApp
