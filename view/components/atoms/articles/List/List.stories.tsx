import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import { Ul, UlLi } from './List'

export default {
  title: 'Ul',
  component: Ul
}

export const h2 = ({ text }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <Ul>
      <UlLi>{text}</UlLi>
    </Ul>
  </ThemeProvider>
)

h2.args = { text: '中見出し' }
