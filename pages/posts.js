import Head from 'next/head'
import Layout from '../components/layout'
import { Container,GridItem,Heading, SimpleGrid } from '@chakra-ui/react'
const posts = () => (
      <Layout title="Posts">
         <Container>
          <Heading as="h4" fontSize={20} mb={4}>
              Recent Posts
          </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                      title="React Boilerplate"
                      /* thumbnail={} */
                      href="https://dev21.hashnode.dev/react-boilerplate-generation"
                    />
                    <GridItem
                      title="Hoisting in JavaScript"
                      /* thumbnail={} */
                      href="https://dev21.hashnode.dev/hoisting-in-javascript"
                    />
                </SimpleGrid>
            </Section>
        </Container>
      </Layout>
  )
export default posts