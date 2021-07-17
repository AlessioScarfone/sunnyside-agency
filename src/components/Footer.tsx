import React from "react";
import styled from "styled-components/macro";
import {
  Logo,
  PinterestIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "./reusable/Images";

const StyledFooter = styled.footer`
  background-color: var(--fixCyan);
  width: 100%;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg path {
    fill: var(--darkCyan);
  }
`;

const LinkRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1rem 1rem 1rem;
  max-width: 90%;

  @media (min-width: 700px) {
    max-width: 40%;
  }

  p {
    color: var(--darkCyan);
  }
`;

const IconRowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 3rem;
  max-width: 90%;

  @media (min-width: 700px) {
    max-width: 40%;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />

      <LinkRowContainer>
        <p>About</p>
        <p>Services</p>
        <p>Projects</p>
      </LinkRowContainer>

      <IconRowContainer>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PinterestIcon />
      </IconRowContainer>
    </StyledFooter>
  );
};

export default Footer;
