import React from 'react';
import { IoLogoIonic, IoIosLeaf } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { Container, Title, Nav } from './styles';

const navItems = [
  {
    label: 'Page 1',
    icon: <IoLogoIonic />,
    link: '/page-1',
  },
  {
    label: 'Page 2',
    icon: <IoIosLeaf />,
    link: '/page-2',
  },
];

const setNavItems = () =>
  navItems.map((item) => (
    <Link key={item.link} to={item.link}>
      {item.label}
    </Link>
  ));

function Sidebar() {
  return (
    <Container>
      <Title>Semantix</Title>

      <Nav>{setNavItems()}</Nav>
    </Container>
  );
}

export default Sidebar;
