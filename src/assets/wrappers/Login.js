import styled from 'styled-components'
export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background: #f2f8fb;
  section {
    text-align: center;
    img {
      width: 90vw;
      max-width: 550px;
    }
    h2 {
      margin: 1rem 0;
      font-family: var(--family);
      font-size: clamp(2rem, 2.5rem, 3.5rem);
      font-weight: 700;
    }
    button {
      border: transparent;
      color: white;
      text-decoration: none;
      background: #079c8ae2;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`
