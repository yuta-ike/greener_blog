/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import Theme from '~/view/theme/theme'
import { MdMenu } from 'react-icons/md'

type Props = {
  className?: string
}

const ArticleOutline: React.FC<Props> = ({ className }) => {
  const [buttonOpen, setButtonOpen] = useState(false)
  return (
    <div className={className} css={rootStyle}>
      <div
        css={iconButtonStyle(buttonOpen)}
        onClick={() => setButtonOpen(!buttonOpen)}
        role="button"
        aria-pressed={buttonOpen}
      >
        <div>
          <MdMenu />
        </div>
      </div>
      <ul css={listStyle(buttonOpen)} className={buttonOpen ? 'pressed' : ''}>
        <li role="button">
          <a href="#オータムハッカソンとは">オータムハッカソンとは?</a>
        </li>
        <li role="button">
          <a href="#やったこと">やったこと</a>
        </li>
        <li role="button">
          <a href="#オータムハッカソンに参加して">
            オータムハッカソンに参加して
          </a>
        </li>
        <li role="button">
          <a href="#オータムハッカソンに参加して2">
            オータムハッカソンに参加して
          </a>
        </li>
        <li role="button">
          <a href="#OrangeApple">OrangeApple</a>
        </li>
      </ul>
    </div>
  )
}

const rootStyle = (theme: Theme) => css`
  padding: 1rem;
  text-align: right;
`

const iconButtonStyle = (buttonOpen: boolean) => (theme: Theme) => css`
  display: inline-block;
  padding: 1em;
  background: transparent;
  cursor: pointer;
  text-align: right;
  font-size: 110%;

  div {
    transition: all 0.5s;
  }

  &:hover {
    div {
      ${'transform: scaleY(1.4);'}
    }
  }
`

const listStyle = (buttonOpen: boolean) => (theme: Theme) => css`
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.5s;
  padding: 0;
  font-size: 85%;

  &.pressed {
    opacity: 1;
    transform: translateY(0px);
  }

  li {
    list-style: none;
    margin-bottom: 0.51em;
    padding: 0.5em 1em 0.5em 0em;
    position: relative;
    cursor: pointer;
    width: 100%;

    & > a {
      padding-right: 0.5em;
      text-decoration: none;
      color: inherit;
    }

    transition: all 0.3s;
    &:hover {
      transform: scale(1.05);
    }
  }
`

export default ArticleOutline
