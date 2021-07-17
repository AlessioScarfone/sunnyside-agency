import React, { useState } from "react";
import styled from "styled-components/macro";
import { Logo, Hamburger } from "./reusable/Images";
import MobileMenu from "./MobileMenu";
import { menuItems } from "../utils/Constants";

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 70%;
  }
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  position: absolute;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.h4<{ selected?: boolean }>`
  color: var(--white);
  font-family: 'Barlow', sans-serif;
  &:not(:last-child) {
    padding-right: 2rem;
  }
  cursor: pointer;

  ${(props) =>
    props.selected &&
    `
        color:  var(--veryDarkBlue);
        background-color:  var(--white);
        padding: 1rem 1.5rem;
        text-align: center;
        border-radius: 30px;
        text-transform: uppercase;
        font-family: 'Fraunces', serif;
      `}
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Menu>
        {menuItems.map((i) => (
          <MenuItem selected={i.selected} key={i.text}>
            {i.text}
          </MenuItem>
        ))}
      </Menu>
      <HamburgerButton onClick={() => setMobileMenuOpen((prevOpenMenuState) => !prevOpenMenuState)}>
        <Hamburger />
      </HamburgerButton>
      <MobileMenu items={menuItems} isOpen={mobileMenuOpen}/>
    </Nav>
  );
};

export default Navbar;
