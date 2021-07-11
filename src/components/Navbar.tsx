import React from "react";
import styled from "styled-components";
import { Logo } from "./Images";
import { flexRowCenter } from "../utils/StyleConst";

const LogoWrap = styled.div`
  ${flexRowCenter}
  max-width: 50%;
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
    </Nav>
  );
};

export default Navbar;
