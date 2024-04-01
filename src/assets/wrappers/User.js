import styled from 'styled-components'
export const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 992px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
