import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { useColorMode } from 'theme-ui'

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode()
  const nextColorMode = {
    'light': 'dark',
    'dark': 'maroon',
    'maroon': 'light',
  }[colorMode]
  return (
    <button onClick={() => setColorMode(nextColorMode)}>
      <span style={{ color: '#e29623', fontSize: 22 }}>&#9770;</span>
    </button>
  )
}

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  width: 100%;
  padding: 1em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li {
    display: inline-block;
    margin-right: 1em;
    &:first-of-type {
      position: relative;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.primary};
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  return (
    <Header>
      <Nav>
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.slug} activeStyle={activeLinkStyle}>
                {link.name}
              </Link>
            </li>
          ))}
          <ThemeSwitcher />
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
