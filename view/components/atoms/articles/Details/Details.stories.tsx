import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import Details from './Details'

export default {
  title: 'Details',
  component: Details
}

export const details = ({ title, body }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <Details className="トピック">
      <h3>{title}</h3>
      <p>{body}</p>
    </Details>
  </ThemeProvider>
)

details.args = {
  title: 'タイトル',
  body: 'コンテンツがここに入ります'
}
