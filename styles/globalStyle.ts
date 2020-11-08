import { css } from '@emotion/core'
import Theme from '~/view/theme/theme'

const globalStyle = (theme: Theme) => css`
  body {
    color: ${theme.color.text};
    background: ${theme.color.bg};
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${theme.color.textGround};
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }
`
export default globalStyle
