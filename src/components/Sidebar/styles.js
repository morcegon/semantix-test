import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.aside`
  align-content: center;
  background: linear-gradient(180deg, black 0%, ${colors.grey1} 100%);
  color: white;
  display: flex;
  flex-direction: column;
  left: 0;
  height: 100%;
  padding: 1rem 0;
  position: fixed;
  top: 0;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 4.5rem;
  text-align: center;
`;

export const Nav = styled.nav`
  align-content: center;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled(Link)`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  text-align: center;
  text-decoration: none;

  &:hover,
  &.is-active {
    background: rgba(255, 255, 255, 0.2);
  }

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  svg {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
`;
