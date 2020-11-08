/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Theme from '~/view/theme/theme'

const BlogHeader: React.FC = () => {
  return (
    <header css={headerClass}>
      <h1>Greener Blog</h1>
    </header>
  )
}

const headerClass = (theme: Theme) => css`
  background: ${theme.color.primary};
  color: white;
  text-align: center;
  padding: 0.5em 0;
  h1 {
    margin: 0;
  }
`

export default BlogHeader
