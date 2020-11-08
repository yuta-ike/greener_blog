import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import H1 from './H1'

export default {
  title: 'H1',
  component: H1
}

export const h1 = ({ children }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <H1>{children}</H1>
  </ThemeProvider>
)

h1.args = { children: '大見出し' }
