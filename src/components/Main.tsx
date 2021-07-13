import React from "react";
import ResponsiveImage from "./reusable/ResponsiveImage";
import { headerImg, ArrowDownIcon } from "./reusable/Images";
import styled from 'styled-components/macro';
import GridSection from "./GridSection";
import Navbar from "./Navbar";

const FloatTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 4.5rem;
`;

const FloatTitle = styled.h1`
  color: var(--white);
  font-family: "Fraunces", serif;
  font-size: clamp(1.8rem, 8vw - 2rem, 3rem);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  font-weight: 900;
  letter-spacing: 4px;
`;

const StyledArrowDownIcon = styled(ArrowDownIcon)`
  position: relative;
  top: 4rem;

  @media (mix-width: 367px) {
    transform: scale(1.3);
  }
`;

const Main = () => {
  return (
    <>
      <Navbar />
      <main>
        <FloatTitleContainer>
          <FloatTitle> WE ARE CREATIVES </FloatTitle>
          <StyledArrowDownIcon />
        </FloatTitleContainer>

        <div>
          <ResponsiveImage
            smallSrc={headerImg.smallSrc}
            largeSrc={headerImg.largeSrc}
          />
        </div>
        <GridSection />
      </main>
    </>
  );
};

export default Main;
