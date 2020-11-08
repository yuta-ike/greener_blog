import StyledMessage from './Message.style'
import { MdInfo } from 'react-icons/md'
import { HiLightBulb } from 'react-icons/hi'
import { MdError, MdWarning } from 'react-icons/md'

type Props = {
  type: 'tip' | 'info' | 'warn' | 'alert'
  children?: React.ReactNode
}

const Message: React.FC<Props> = ({ type = 'info', children }) => (
  <StyledMessage className={type}>
    {type === 'tip' ? (
      <HiLightBulb className="open-icon" />
    ) : type === 'info' ? (
      <MdInfo className="open-icon" />
    ) : type === 'warn' ? (
      <MdWarning className="open-icon" />
    ) : (
      <MdError className="open-icon" />
    )}
    <div>{children}</div>
  </StyledMessage>
)

export default Message

export const TipMessage: React.FC = ({ ...props }) => (
  <Message type="tip" {...props} />
)

export const InfoMessage: React.FC = ({ ...props }) => (
  <Message type="info" {...props} />
)

export const WarnMessage: React.FC = ({ ...props }) => (
  <Message type="warn" {...props} />
)

export const AlertMessage: React.FC = ({ ...props }) => (
  <Message type="alert" {...props} />
)
