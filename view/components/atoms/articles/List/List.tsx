import { HTMLAttributes } from 'react'
import { StyledUl, StyledOl, StyledUlLi, StyledOlLi } from './List.style'

type Props<Element> = HTMLAttributes<Element>

export const Ul: React.FC<Props<HTMLUListElement>> = ({ ...args }) => (
  <StyledUl {...args} />
)
export const Ol: React.FC<Props<HTMLOListElement>> = ({ ...args }) => (
  <StyledOl {...args} />
)
export const UlLi: React.FC<Props<HTMLLIElement>> = ({ ...args }) => (
  <StyledUlLi {...args} />
)
export const OlLi: React.FC<Props<HTMLLIElement>> = ({ ...args }) => (
  <StyledOlLi {...args} />
)
