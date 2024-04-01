import styled from 'styled-components'
export const Wrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 992px) {
    & {
      grid-template-columns: 3fr 2fr;
      border-radius: 10px;
    }
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`
