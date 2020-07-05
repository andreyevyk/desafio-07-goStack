import React from 'react';

import { useHistory } from 'react-router-dom';

import { Container, Navigation, NavItem } from './styles';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <Container size={size}>
      <header>
        <img src={logo} alt="Go Finances" />
        <Navigation>
          <NavItem active={pathname !== '/import'} to="/">
            Listagem
          </NavItem>
          <NavItem active={pathname === '/import'} to="import">
            Importar
          </NavItem>
        </Navigation>
      </header>
    </Container>
  );
};

export default Header;
