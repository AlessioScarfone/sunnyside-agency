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
`;

const StyledCyanIconWrapper = styled.div`
  svg path {
    fill: var(--darkCyan);
  }
`;

const LinkRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1rem 1rem 1rem;
  max-width: 100%;

  @media (min-width: 770px) {
    max-width: 30%;
  }
`;

const FooterLink = styled.p`
  color: var(--darkCyan)
`;

const IconRowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 100%;

  @media (min-width: 770px) {
    max-width: 30%;
  }
`;

const Footer = () => {
  return (
    <StyledCyanIconWrapper>
      <StyledFooter>
        <Logo />

        <LinkRowContainer>
          <FooterLink>About</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>Projects</FooterLink>
        </LinkRowContainer>

        <IconRowContainer>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PinterestIcon />
        </IconRowContainer>
      </StyledFooter>
    </StyledCyanIconWrapper>
  );
};

export default Footer;
