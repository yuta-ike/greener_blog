/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { customProps, rootProps, titleProps } from './Code.style'
import { FaRegCopy } from 'react-icons/fa'
import { useState } from 'react'

type Props = {
  className: string
  children: string
}

const Code: React.FC<Props> = ({ className, children }) => {
  const language = className.split('.').slice(-1)[0]
  const filename = className.replace(/language-/, '')
  const [expanded, setIsExpanded] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    navigator.clipboard.writeText(children)
  }

  return (
    <div css={rootProps} className={expanded ? 'expanded' : ''}>
      <div css={titleProps} onClick={() => setIsExpanded(!expanded)}>
        <div>{filename}</div>
        <div className="icon-wrapper" onClick={handleCopy}>
          <FaRegCopy />
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers
        customStyle={customProps(expanded)}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
export default Code
