import StyledGreyBox from './GreyBox.style'

type Props = {
  children: React.ReactNode
}

const GreyBox: React.FC<Props> = ({ ...props }) => <StyledGreyBox {...props} />

export default GreyBox
