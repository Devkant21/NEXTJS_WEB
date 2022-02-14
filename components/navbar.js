// import Link from 'next/link'
// import navStyles from "../styles/Nav.module.css"

import Logo from '../components/logo'
// import NextLink from './next/link';
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue} from "@chakra-ui/react";
import { HamburgerIcon} from "@chakra-ui/icons"

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactivecolor = useColorModeValue('gray200', whiteAlpha)
    return (
        <NextLink href={href}>
            <Link
            p={2}
            bg={active ? 'glassTeal': undefined}
            color={active ? '#202023' : inactiveColor}>
                { children }
            </Link>
        </NextLink>
    )
}


const Navbar = props => {
    const { path } = props
  return (
      <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{backdropFilter: 'blur(10px)'}}
      zIndex={1}
      {...props}
      >
          Navbar
      </Box>
  )
}

export default Navbar
    
// import Logo from './logo'
// import NextLink from 'next/link'
// import {
//   Container,
//   Box,
//   Link,
//   Stack,
//   Heading,
//   Flex,
//   Menu,
//   MenuItem,
//   MenuList,
//   MenuButton,
//   IconButton,
//   useColorModeValue
// } from '@chakra-ui/react'
// import { HamburgerIcon } from '@chakra-ui/icons'
// import ThemeToggleButton from './theme_on_off'
// // import { IoLogoGithub } from 'react-icons/io5'

// const LinkItem = ({ href, path, _target, children, ...props }) => {
//   const active = path === href
//   const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
//   return (
//     <NextLink href={href} passHref>
//       <Link
//         p={2}
//         bg={active ? 'grassTeal' : undefined}
//         color={active ? '#202023' : inactiveColor}
//         _target={_target}
//         {...props}
//       >
//         {children}
//       </Link>
//     </NextLink>
//   )
// }

// const Navbar = props => {
//   const { path } = props

//   return (
//     <Box
//       position="fixed"
//       as="nav"
//       w="100%"
//       bg={useColorModeValue('#ffffff40', '#20202380')}
//       css={{ backdropFilter: 'blur(10px)' }}
//       zIndex={1}
//       {...props}
//     >
//       <Container
//         display="flex"
//         p={2}
//         maxW="container.md"
//         wrap="wrap"
//         align="center"
//         justify="space-between"
//       >
//         <Flex align="center" mr={5}>
//           <Heading as="h1" size="lg" letterSpacing={'tighter'}>
//             <Logo />
//           </Heading>
//         </Flex>

//         <Stack
//           direction={{ base: 'column', md: 'row' }}
//           display={{ base: 'none', md: 'flex' }}
//           width={{ base: 'full', md: 'auto' }}
//           alignItems="center"
//           flexGrow={1}
//           mt={{ base: 4, md: 0 }}
//         >
//         </Stack>

//         <Box flex={1} align="right">
//           <ThemeToggleButton />

//           <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
//             <Menu isLazy id="navbar-menu">
//               <MenuButton
//                 as={IconButton}
//                 icon={<HamburgerIcon />}
//                 variant="outline"
//                 aria-label="Options"
//               />
//               <MenuList>
//                 <NextLink href="/" passHref>
//                   <MenuItem as={Link}>About</MenuItem>
//                 </NextLink>
//                 <NextLink href="/works" passHref>
//                   <MenuItem as={Link}>Works</MenuItem>
//                 </NextLink>
//                 <NextLink href="/posts" passHref>
//                   <MenuItem as={Link}>Posts</MenuItem>
//                 </NextLink>
//                 <MenuItem
//                   as={Link}
//                   href="https://github.com/Devkant21"
//                 >
//                   View Source
//                 </MenuItem>
//               </MenuList>
//             </Menu>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   )
// }

// export default Navbar



//     <nav className={navStyles.nav}>
//         <ul>
//             <li>
//                 <Link href='/' >Home

//                 </Link>
//             </li>
//             <li>
//                 <Link href='/about' >About
 
//                 </Link>
//             </li>
//             <li>
//                 <Link href='/Posts' >Posts
 
//                 </Link>
//             </li>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar