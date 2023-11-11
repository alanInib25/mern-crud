import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.thirdColor};
  border-radius: 0.5rem;
  transition: 0.2s linear;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;/* 
  justify-content: space-between; */
`;

export const NavMenuItem = styled.li`
  padding: .5rem;
  text-align: center;
  display: inline;
  &:hover {
    background: ${({ theme }) => theme.colors.firstColor};
  }
`;