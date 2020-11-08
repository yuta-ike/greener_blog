import { css } from '@emotion/core'

export const rootProps = css`
  &.expanded {
    margin-left: max(calc((-90vw + 100%) / 2), calc((-950px + 100%) / 2));
  }
`

export const titleProps = css`
  margin: 0 0.5em 2px 1em;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  cursor: pointer;

  .expanded & {
    width: 90vw;
    max-width: 950px;
  }

  & > .icon-wrapper {
    cursor: pointer;
    padding: 0 2em;
    display: flex;
    align-items: center;
    transition: all 0.1s;

    &:hover {
      background: #9c9c9c44;
      border-radius: 3px;
    }
  }
`

export const customProps = (expanded: boolean) => ({
  fontSize: '14px',
  borderRadius: '7px',
  marginTop: '0',
  width: expanded ? '90vw' : 'auto',
  maxWidth: '950px'
})
