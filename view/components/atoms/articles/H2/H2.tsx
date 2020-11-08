import { HTMLAttributes } from 'react'
import StyledH2 from './H2.style'

type Props = {
  children: string
} & HTMLAttributes<HTMLHeadingElement>

const H2: React.FC<Props> = ({ ...args }) => <StyledH2 {...args} />

export default H2
