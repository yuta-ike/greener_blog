/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useReducer } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import {
  detailsStyle,
  summaryStyle,
  detailsContentStyle
} from './Details.style'

type Props = {
  className: string
}

const Details: React.FC<Props> = (props) => {
  const { className, children } = props
  const [isOpen, toggleOpen] = useReducer((state) => !state, false)
  return (
    <div css={detailsStyle(isOpen)}>
      <div
        css={summaryStyle}
        className={isOpen ? 'open' : ''}
        onClick={toggleOpen}
      >
        {isOpen ? (
          <FaMinus className="open-icon" />
        ) : (
          <FaPlus className="open-icon" />
        )}
        {className}
      </div>
      <div css={detailsContentStyle} className={isOpen ? 'open' : ''}>
        {children}
      </div>
    </div>
  )
}

export default Details
