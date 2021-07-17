import React from "react";
import styled from "styled-components/macro";
import MenuItemElemModel from "../utils/MenuItemElem.model";

interface MobileMenuProps {
  items: MenuItemElemModel[];
  isOpen: boolean;
  className?: string;
}

const Triangle = styled.div`
  z-index: 999;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -10%;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 40px 40px;
  border-color: transparent transparent var(--white) transparent;
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  ${(props) => (props.isOpen ? `display: flex` : `display: none`)};
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
`;

const MobileMenuContainer = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: var(--white);
  z-index: 998;
  border-radius: 3px;
`;

const MobileMenuItem = styled.h4<{ selected?: boolean }>`
  color: var(--veryDarkGrayishBlue);
  font-family: "Barlow", sans-serif;
  cursor: pointer;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) =>
    props.selected &&
    `
        color: var(--veryDarkBlue);
        background-color:  var(--yellow);
        padding: 1rem 1.5rem;
        text-align: center;
        border-radius: 30px;
        text-transform: uppercase;
        font-family: 'Fraunces', serif;
      `}
`;

const MobileMenu = ({ items, isOpen, className }: MobileMenuProps) => {
  return (
    <Wrapper isOpen={isOpen}>
      <MobileMenuContainer>
        <Triangle />
        {items.map((i) => (
          <MobileMenuItem selected={i.selected} key={i.text}>
            {i.text}
          </MobileMenuItem>
        ))}
      </MobileMenuContainer>
    </Wrapper>
  );
};

export default MobileMenu;
