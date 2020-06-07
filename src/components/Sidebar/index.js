import React from 'react';
import { IoLogoIonic, IoIosLeaf } from 'react-icons/io';
import { useLocation } from 'react-router-dom';

import { Container, Title, Nav, NavItem } from './styles';

const navItems = [
  {
    label: 'Page 1',
    icon: <IoLogoIonic />,
    link: '/',
  },
  {
    label: 'Page 2',
    icon: <IoIosLeaf />,
    link: '/page-2',
  },
];

const setNavItems = (pathname) =>
  navItems.map((item) => (
    <NavItem
      key={item.link}
      to={item.link}
      className={pathname === item.link && 'is-active'}>
      {item.icon}
      {item.label}
    </NavItem>
  ));

function Sidebar() {
  const location = useLocation();

  return (
    <Container>
      <Title>Semantix</Title>

      <Nav>{setNavItems(location.pathname)}</Nav>
    </Container>
  );
}

export default Sidebar;
