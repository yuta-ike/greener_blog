import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import GreyBox from './GreyBox'

export default {
  title: 'GreyBox',
  component: GreyBox
}

export const greyBox = ({ title, body }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <GreyBox>
      <h3>{title}</h3>
      <p>{body}</p>
    </GreyBox>
  </ThemeProvider>
)

greyBox.args = {
  title: 'タイトル',
  body: 'コンテンツがここに入ります'
}
