import styled from 'styled-components'
export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  section {
    img {
      width: 90vw;
      max-width: 660px;
    }
    h3 {
      font-size: 1.5rem;
    }
    a {
      text-decoration: none;
      color: white;
      background: var(--color1);
      padding: 0.5rem;
      display: inline-block;
      margin-top: 1rem;
      border-radius: 8px;
      transition: var(--transition);
    }
    a:hover {
      background: var(--color1-hover);
    }
  }
`
