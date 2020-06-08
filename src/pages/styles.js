import styled from 'styled-components';

export const PageContent = styled.div`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : 1)},
    1fr
  );
  width: 100%;
`;
