import styled from 'styled-components';

export const PageContent = styled.div`
  display: grid;
  column-gap: 2rem;
  width: 100%;

  @media (min-width: 426px) {
    grid-template-columns: repeat(
      ${(props) => (props.columns ? props.columns : 1)},
      1fr
    );
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
