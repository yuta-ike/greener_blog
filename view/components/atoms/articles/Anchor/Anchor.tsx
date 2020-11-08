import { AnchorHTMLAttributes } from 'react'
import StyledAnchor from './Anchor.style'

type Props = AnchorHTMLAttributes<HTMLAnchorElement>

const Anchor: React.FC<Props> = ({ ...props }) => <StyledAnchor {...props} />
export default Anchor
