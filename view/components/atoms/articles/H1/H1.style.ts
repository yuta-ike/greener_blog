import styled from '@emotion/styled'
import tm from '~/view/theme/util/theme_accesser'

const StyledH1 = styled.h2`
  position: relative;
  font-size: 1.1rem;
  line-height: 4rem;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: -1em;
    height: calc(100% - 8px);
    width: calc(100% + 2em);
    border-top: 4px solid ${tm.color.accent};
    border-bottom: 4px solid ${tm.color.accent};
    pointer-events: none;
  }

  & ~ & {
    margin-top: 3rem;
  }
`

export default StyledH1
