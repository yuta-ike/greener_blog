import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tm from '~/view/theme/util/theme_accesser'

const listBaseStyle = () => css`
  padding-left: 0;
`

const itemBaseStyle = () => css`
  list-style: none;
  position: relative;
  padding-left: 3em;

  &::before {
    display: inline-block;
  }
`

export const StyledUl = styled.ul`
  ${listBaseStyle}
`

export const StyledOl = styled.ol`
  ${listBaseStyle};
  counter-reset: item;
`

export const StyledUlLi = styled.li`
  ${itemBaseStyle};

  &::before {
    position: absolute;
    content: '';
    border: 6px solid ${tm.color.accent};
    border-radius: 6px;
    top: calc(50% - 6px);
    left: calc(1.5em - 6px);
  }
`

export const StyledOlLi = styled.li`
  ${itemBaseStyle};

  margin-bottom: 1em;
  &::before {
    counter-increment: item;
    content: counter(item);
    position: absolute;
    top: calc(50% - 12px);
    left: calc(1.5em - 25px / 2);
    font-weight: bold;
    font-size: 13px;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 50%;
    color: #fff;
    background: ${tm.color.accent};
  }
`
