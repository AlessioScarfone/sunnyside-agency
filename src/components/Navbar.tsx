import React from "react";
import styled from "styled-components";
import { Logo, Hamburger } from "./reusable/Images";
import { flexRowCenter } from "../utils/StyleConst";

const LogoWrap = styled.div`
  ${flexRowCenter}
  width: 30%;
`;

const HamburgerButton = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Nav = styled.header`
  ${flexRowCenter}
  justify-content: space-between;
  padding: 1.2rem 2rem;
  position: absolute;
  width: 100%;
`;

const Menu = styled.div`
  ${flexRowCenter}
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.h4<{ selected?: boolean }>`
  color: var(--white);
  &:not(:last-child) {
    padding-right: 2rem;
  }
  cursor: pointer;

  ${(props) =>
    props.selected
      ? `
        color:  black;
        background-color:  var(--white);
        padding: 0.8rem 1.5rem;
        text-align: center;
        border-radius: 30px;
        text-transform: uppercase;
        font-family: 'Fraunces', serif;
      `
      : ""}
`;

//TODO: mobile menu
const Navbar = () => {
  const openMobileMenu = () => {
    console.log("OPEN MOBILE MENU");
  };

  return (
    <Nav>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem selected={true}>Contact</MenuItem>
      </Menu>
      <HamburgerButton onClick={openMobileMenu}>
        <Hamburger />
      </HamburgerButton>
    </Nav>
  );
};

export default Navbar;
