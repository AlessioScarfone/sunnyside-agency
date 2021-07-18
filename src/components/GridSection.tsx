import React from "react";
import styled from "styled-components/macro";
import {
  eggImg,
  glassImg,
  designImg,
  orangeImg,
  galleryImgs,
} from "./reusable/Images";
import ResponsiveImage from "./reusable/ResponsiveImage";
import TextSection from "./reusable/TextSection";
import { textSectionData, testimonialData } from "../utils/Constants";
import ResponsiveImageWithText from "./reusable/ResponsiveImageWithText";
import TestimonialSection from "./reusable/TestimonialSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const MainGridContainer = styled.div`
  max-width: 100%;
  @media (min-width: 770px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const TestimonialSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6rem;
  padding-bottom: 6rem;

  /* testimonial section container */
  .inner-container {
    display: flex;
    flex-direction: column;
    @media (min-width: 770px) {
      flex-direction: row;
    }
  }
`;

const TestimonialSectionTitle = styled.h2`
  width: 100%;
  color: var(--grayishBlue);
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding-bottom: 1rem;
  flex-basis: 100%;
`;

const ImageGallery = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 0px;
  @media (min-width: 770px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const StyledTextSection = styled(TextSection)`
  order: -1; 
  /* This is the first element of the grid layout */
` 


const GridSection = () => {
  return (
    <Container>
      <MainGridContainer>
        <ResponsiveImage
          smallSrc={eggImg.smallSrc}
          largeSrc={eggImg.largeSrc}
        />
        <StyledTextSection
          title={textSectionData[0].title}
          text={textSectionData[0].text}
          linkText={textSectionData[0].link}
          linkColor="--yellow"
        />
        <ResponsiveImage
          smallSrc={glassImg.smallSrc}
          largeSrc={glassImg.largeSrc}
        />
        <TextSection
          title={textSectionData[1].title}
          text={textSectionData[1].text}
          linkText={textSectionData[1].link}
          linkColor="--softRed"
        />
        <ResponsiveImageWithText
          smallSrc={designImg.smallSrc}
          largeSrc={designImg.largeSrc}
          title={textSectionData[2].title}
          text={textSectionData[2].text}
          textColor="--darkCyan"
        />
        <ResponsiveImageWithText
          smallSrc={orangeImg.smallSrc}
          largeSrc={orangeImg.largeSrc}
          title={textSectionData[3].title}
          text={textSectionData[3].text}
          textColor="--darkBlue"
        />
      </MainGridContainer>
      <TestimonialSectionContainer>
        <TestimonialSectionTitle>Client Testimonials</TestimonialSectionTitle>
        <div className="inner-container">
          {testimonialData.map((e) => (
            <TestimonialSection
              key={e.id}
              image={e.image}
              text={e.text}
              desc={e.desc}
              name={e.name}
            />
          ))}
        </div>
      </TestimonialSectionContainer>
      <ImageGallery>
        {galleryImgs.map((img) => (
          <ResponsiveImage
            smallSrc={img.smallSrc}
            largeSrc={img.largeSrc}
            key={img.smallSrc}
          />
        ))}
      </ImageGallery>
    </Container>
  );
};

export default GridSection;
