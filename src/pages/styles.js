import styled from 'styled-components';

export const PageContent = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : 1)},
    1fr
  );
`;
