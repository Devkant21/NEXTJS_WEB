// import Link from 'next/link'
import navStyles from "../styles/Nav.module.css"

import Logo from './logo'
import NextLink from './next/link'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue} from "@chakra-ui/react";
import { HumburgerIcon} from "@chakra-ui/icons"

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/' >Home

                </Link>
            </li>
            <li>
                <Link href='/about' >About
 
                </Link>
            </li>
            <li>
                <Link href='/Posts' >Posts
 
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav