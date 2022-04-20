import React from 'react'
import styled from '@emotion/styled'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: none;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.5;
    margin: 0 0 1.5em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    padding-left: 20px;
    li {
      padding: 0.1em 0;
      list-style: disc;
      list-style-position: outside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    padding-left: 20px;
    li {
      padding: 0.1em 0;
      list-style: decimal;
      list-style-position: outside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.primary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding: 0 0 0 0.5em;
  }

  code {
    border-radius: 2px !important;
    color: ${props => props.theme.colors.text} !important;
    background: ${props => props.theme.colors.tertiary} !important;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.tertiary} !important;
    span {
      background: inherit !important;
    }
  }

  a.anchor {
    fill: ${props => props.theme.colors.highlight};
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
