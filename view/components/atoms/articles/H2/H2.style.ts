import styled from '@emotion/styled'
import tm from '~/view/theme/util/theme_accesser'

const StyledH2 = styled.h3`
  position: relative;
  font-size: 1.1rem;
  line-height: 3rem;
  margin-top: 2rem;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: -1em;
    height: 100%;
    width: 0.3em;
    background: ${tm.color.accent};
  }
`

export default StyledH2
