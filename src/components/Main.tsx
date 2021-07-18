import React from 'react';
import ResponsiveImage from './reusable/ResponsiveImage';
import { headerImg, ArrowDownIcon } from './reusable/Images';
import styled, {keyframes} from 'styled-components/macro';
import GridSection from './GridSection';
import Navbar from './Navbar';
import Footer from './Footer';

const FloatTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 15vh;
`;

const FloatTitle = styled.h1`
  color: var(--white);
  font-family: 'Fraunces', serif;
  font-size: clamp(1.8rem, 8vw - 2rem, 3rem);
  width: 100%;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  text-align: center;
  font-weight: 900;
  letter-spacing: 4px;
`;

const arrowAnimation = keyframes`
  0% { top: 3rem }
  50% { top: 4rem; }
  100% { top: 3rem; }
`;

const StyledArrowDownIcon = styled(ArrowDownIcon)`
  position: relative;
  top: 4rem;
  animation: ${arrowAnimation} 2s ease-in-out infinite;

  @media (mix-width: 367px) {
    transform: scale(1.3);
  }
`;

const Main = () => {
  return (
    <>
      <Navbar />
      <>
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
      </>
      <Footer />
    </>
  );
};

export default Main;
