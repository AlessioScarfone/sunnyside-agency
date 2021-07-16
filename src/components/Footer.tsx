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
  background-color: var(--moderateDarkCyan);
  width: 100%;
  padding: 3rem;
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

const IconRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 3rem;
`;

const Footer = () => {
  return (
    <StyledCyanIconWrapper>
      <StyledFooter>
        <Logo />
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
