// import Link from 'next/link'
import navStyles from "../styles/Nav.module.css"

import Logo from './logo'
import NextLink from './next/link'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue} from "@chakra-ui/react";
import { HumburgerIcon} from "@chakra-ui/icons"

const LinkItem = ({ href, path, children }) => {
    const active = path ==== href
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


const Nav = props => {
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

export default Nav