import PropTypes from 'prop-types';
import React from 'react';

import { Container, Title } from './styles';

function Card({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
