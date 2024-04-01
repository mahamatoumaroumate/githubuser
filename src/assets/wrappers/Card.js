import styled from 'styled-components'
export const Wrapper = styled.div`
  background: white;
  padding: 2rem;
  padding-top: 3rem;
  position: relative;
  &::before {
    content: 'User';
    position: absolute;
    font-family: var(--family);
    top: 0px;
    left: 0;
    font-weight: bold;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 18px;
    background: var(--color1);
    padding: 0.5rem 2rem;
  }
  border-radius: 8px;
  section {
    display: flex;
    justify-content: space-between;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
  }
  article {
    display: flex;
    column-gap: 2rem;
  }
  .info {
    margin-top: 0.7rem;
    h3 {
      padding-bottom: 0.2rem;
    }
  }
  .follow {
    text-decoration: none;
    padding: 0.5rem 1rem;
    background: transparent;
    border-radius: 8px;
    height: 18px;
    color: #0369a1;
    font-size: 1.2rem;
    border: 2px solid var(--color1);
    transition: var(--transition);
  }
  .follow:hover {
    background: var(--color1-hover);
  }
  .twitter {
    color: #0369a1;
    text-decoration: none;
  }
  .bio {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .links {
    span {
      display: flex;
      align-items: center;
      padding: 0.2rem 0rem;
      font-size: 1.2rem;
    }
    svg {
      color: #0369a1;
      margin-right: 0.5rem;
    }
  }
`
