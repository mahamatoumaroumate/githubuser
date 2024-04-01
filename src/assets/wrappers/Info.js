import styled from 'styled-components'
export const Wrapper = styled.article`
  .items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 0.75rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.6rem;
    font-family: var(--family);
  }
  h3 {
    color: #718b90;
    letter-spacing: 1px;
  }
  .item {
    background: white;
    border-radius: 8px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px rgba(0, 0, 0, 0.1);
  }
  article {
    padding: 1rem 2rem;
    display: flex;
    column-gap: 2rem;
  }
  .red {
    color: #a7145d;
    background: #fbbddc;
    padding: 0.5rem 0.7rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .blue {
    color: #3b82f6;
    background: #cddffb;
    padding: 0.5rem 0.7rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .pink {
    color: #ea8b25;
    background: #fadec0;
    padding: 0.5rem 0.7rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .green {
    color: #057b6d;
    background: #b8f1ea;
    padding: 0.5rem 0.7rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
  .icon {
    font-size: 1.6rem;
    font-weight: bold;
  }
  @media (min-width: 650px) {
    .items {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 992px) {
    .items {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
