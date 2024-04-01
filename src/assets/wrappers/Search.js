import styled from 'styled-components'
export const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  .section-center {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-radius: 5px;
    background: white;
    padding: 0.4rem 0.5rem;
  }
  .form {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
  }
  input {
    padding: 0.3rem 0.5rem;
    border: transparent;
  }
  .btn {
    padding: 0 1.5rem;
    border-radius: 3px;
    border: none;
    font-size: 1.2rem;
    background: var(--color1);
  }
  h3 {
    font-size: 1.5rem;
    font-family: var(--family);
    color: rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 650px) {
    input {
      padding: 0.3rem 0.5rem;
      font-size: 1.2rem;
    }
    .btn {
      padding: 0 1.5rem;
    }
    & {
      grid-template-columns: 3fr 1fr;
      margin-bottom: 4rem;
    }
    svg {
      font-size: 2rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`
