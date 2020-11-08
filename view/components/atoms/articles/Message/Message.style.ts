import styled from '@emotion/styled'

const StyledMessage = styled.div`
  padding: 1em;
  margin: 0.5rem 0;
  border-radius: 5px;
  border-radius: 7px;

  display: inline-flex;
  align-items: center;
  width: 100%;

  .open-icon {
    margin-right: 1rem;
    font-size: 1.6rem;
  }

  &.tip {
    background: rgb(223, 239, 217);

    .open-icon {
      color: rgb(115 192 87);
    }
  }

  &.info {
    background: rgb(222 241 255);

    .open-icon {
      color: rgb(117, 172, 213);
    }
  }

  &.warn {
    background: rgb(252 248 228);
    .open-icon {
      color: rgb(216 185 26);
    }
  }

  &.alert {
    background: rgb(250 220 220);
    .open-icon {
      color: rgb(229, 99, 99);
    }
  }
`
export default StyledMessage
