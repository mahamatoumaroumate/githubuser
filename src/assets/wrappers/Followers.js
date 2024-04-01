import styled from 'styled-components'
export const Wrapper = styled.div`
  position: relative;
  height: 280px;
  overflow: scroll;
  background: white;
  border-radius: 8px;
  &::before {
    content: 'Followers';
    position: sticky;
    font-family: var(--family);
    float: right;
    top: 0px;
    right: 0;
    font-weight: bold;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 18px;
    background: var(--color1);
    padding: 0.5rem 2rem;
  }
  .followers {
    padding: 1rem;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    h4 {
      text-transform: capitalize;
      font-family: var(--family);
    }
  }
  section {
    display: flex;
    column-gap: 2rem;
    padding: 0.5rem 1rem;
  }
  a {
    text-decoration: none;
    font-size: 1.1rem;
    color: #0369a1;
  }
`
