import { css } from '@emotion/core'
import Theme from '~/view/theme/theme'

export const detailsStyle = (isOpen: boolean) => (theme: Theme) => css`
  overflow-y: hidden;
`

export const summaryStyle = (theme: Theme) => css`
  padding: 0.5em 1em;
  background: ${theme.color.bgGrey};
  border-radius: 7px 7px 0 0;

  display: inline-flex;
  align-items: center;
  width: 100%;
  cursor: pointer;

  .open-icon {
    margin-right: 1em;
  }
`
export const detailsContentStyle = (theme: Theme) => css`
  border: 2px solid ${theme.color.bgGrey};
  border-radius: 0 0 7px 7px;
  padding: 0.5em;

  transition: all 0s;
  max-height: 0;
  display: block;
  opacity: 0;
  visibility: hidden;
  &.open {
    transition: all 0.5s;
    max-height: none;
    opacity: 1;
    visibility: visible;
  }
`
