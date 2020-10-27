import React from 'react'

type Props = {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

// eslint-disable-next-line react/prop-types
const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button style={{ padding: '10px' }} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
