import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import H2 from './H2'

export default {
  title: 'H2',
  component: H2
}

export const h2 = ({ children }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <H2>{children}</H2>
  </ThemeProvider>
)

h2.args = { children: '中見出し' }
