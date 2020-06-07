import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  background: white;
  border: 0.2rem solid ${colors.grey2};
  border-radius: 0.4rem;
  box-shadow: 0px 7px 60px rgba(90, 97, 105, 0.16),
    0px 8px 8px rgba(90, 97, 105, 0.06), 0px 3px 6px rgba(90, 97, 105, 0.12),
    0px 1px 0px rgba(90, 97, 105, 0.11);
  display: inline-block;
  padding: 2rem 1.5rem;
`;
