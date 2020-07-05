import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;

    padding: ${({ size }) => (size === 'small' ? '0 20px' : '0 20px 150px')};

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  list-style: none;
  a {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    transition: opacity 0.2s;

    & + a {
      margin-left: 32px;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styled(Link)<NavItemProps>`
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #ff872c;
      padding-bottom: 10px;
    `}
`;
