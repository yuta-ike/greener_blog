import styled from '@emotion/styled'
import React from 'react'

const StyledButton = styled.button`
  padding: 14px;
  background: red;
`

type Props = {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// eslint-disable-next-line react/prop-types
const Button: React.FC<Props> = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

export default Button
