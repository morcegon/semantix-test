import React from 'react';
import { IoLogoIonic, IoIosLeaf } from 'react-icons/io';

import { Container, Title, Nav, NavItem } from './styles';

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
    <NavItem key={item.link} to={item.link}>
      {item.icon}
      {item.label}
    </NavItem>
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
