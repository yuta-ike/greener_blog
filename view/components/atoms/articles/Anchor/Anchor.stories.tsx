import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import Anchor from './Anchor'

export default {
  title: 'Anchor',
  component: Anchor
}

export const anchor = ({ children }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <Anchor>{children}</Anchor>
  </ThemeProvider>
)

anchor.args = { children: 'リンク' }
