import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.bordercol};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: auto;
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.text};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="https://github.com/dokaka-web-late-r3/Shinya-GitHub-Center"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="/dokaka-web-late-r3/images/github_blackwhite_logo.png"
            style={{ width: '40px' }}
            alt="GitHub"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://www.facebook.com/post.pandemic.dkk/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="/dokaka-web-late-r3/images/facebook_logo.svg"
            style={{ width: '40px' }}
            alt="Facebook"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://www.youtube.com/c/DKKFUNVIDEO"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="/dokaka-web-late-r3/images/youtube_logo.svg"
            style={{ width: '40px' }}
            alt="YouTube"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://music.apple.com/us/album/the-dokaka-discography/392217854"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="/dokaka-web-late-r3/images/tddiscog_logo.png"
            style={{ width: '40px', borderRadius: '5px' }}
            alt="The Dokaka Discography"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://music.apple.com/jp/album/human-interface/295543709"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="/dokaka-web-late-r3/images/hiface_logo.png"
            style={{ width: '40px', borderRadius: '5px' }}
            alt="Human Interface"
          />
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
