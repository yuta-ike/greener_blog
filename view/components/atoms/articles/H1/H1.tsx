import { HTMLAttributes } from 'react'
import StyledH1 from './H1.style'

type Props = {
  children: string
} & HTMLAttributes<HTMLHeadingElement>

const H1: React.FC<Props> = ({ ...args }) => <StyledH1 {...args} />

export default H1
