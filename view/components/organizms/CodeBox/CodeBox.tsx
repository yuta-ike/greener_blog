import styled from '@emotion/styled'
import { css } from 'emotion'
import React from 'react'

const NotmalSpan = styled.span`
  display: inline-block;
  color: #333333;
  font-family: 'Fira Code';
  background: skyblue;
  padding: 0.5em;
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.5s;
  &:hover {
    color: orangered;
  }
`

const style = css`
  font-size: 20px;
`

const CodeBox = () => {
  return (
    <div className={style}>
      <NotmalSpan>const</NotmalSpan> <NotmalSpan>x</NotmalSpan>{' '}
      <NotmalSpan>=</NotmalSpan> <NotmalSpan>2</NotmalSpan>{' '}
      <NotmalSpan>*</NotmalSpan> <NotmalSpan>3</NotmalSpan>{' '}
      <NotmalSpan>;</NotmalSpan>
    </div>
  )
}

export default CodeBox
