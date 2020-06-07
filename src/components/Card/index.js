import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

function Card({ children }) {
  return <Container>{children}</Container>;
}

export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
