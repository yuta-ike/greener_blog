import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import Code from './Code'

export default {
  title: 'Code',
  component: Code
}

export const code = ({ children }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <Code className="language-tsx">{children}</Code>
  </ThemeProvider>
)

const codeStr = `import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import Code from './Code'

export default {
  title: 'Code',
  component: Code
}

export const code = ({ children }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <Code>{children}</Code>
  </ThemeProvider>
)
`

code.args = { children: codeStr }
