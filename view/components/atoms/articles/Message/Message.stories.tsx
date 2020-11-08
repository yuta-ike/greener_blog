import { ThemeProvider } from 'emotion-theming'
import { themeBuilder } from '../../../../theme/theme'
import Message, {
  TipMessage,
  InfoMessage,
  WarnMessage,
  AlertMessage
} from './Message'

export default {
  title: 'Message',
  component: Message
}

export const tipMessage = ({ message }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <TipMessage>
      <p>{message}</p>
    </TipMessage>
  </ThemeProvider>
)

tipMessage.args = {
  message: 'コンテンツがここに入ります'
}

export const infoMessage = ({ message }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <InfoMessage>
      <p>{message}</p>
    </InfoMessage>
  </ThemeProvider>
)

infoMessage.args = {
  message: 'コンテンツがここに入ります'
}

export const warnMessage = ({ message }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <WarnMessage>
      <p>{message}</p>
    </WarnMessage>
  </ThemeProvider>
)

warnMessage.args = {
  message: 'コンテンツがここに入ります'
}

export const alertMessage = ({ message }) => (
  <ThemeProvider theme={themeBuilder('light')}>
    <AlertMessage>
      <p>{message}</p>
    </AlertMessage>
  </ThemeProvider>
)

alertMessage.args = {
  message: 'コンテンツがここに入ります'
}
