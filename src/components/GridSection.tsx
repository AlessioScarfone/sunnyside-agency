import React from "react";
import styled from "styled-components/macro";
import { eggImg, glassImg, designImg, orangeImg } from "./reusable/Images";
import ResponsiveImage from "./reusable/ResponsiveImage";
import TextSection from "./reusable/TextSection";
import { textSectionData, testimonialData } from "../utils/Constants";
import ResponsiveImageWithText from "./reusable/ResponsiveImageWithText";
import TestimonialSection from "./reusable/TestimonialSection";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  //TODO: fix on desktop
  @media (min-width: 768px) {
    display: grid;
    grid-row: 1fr 1fr 1fr;
    grid-column: 1fr 1fr;
  }
`;

const TestimonialSectionContainer = styled.section`
  display: flex;
  flex-direction: column;

  /* testimonial section container */
  .inner-container {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

const TestimonialSectionTitle = styled.h2`
  width: 100%;
  color: var(--grayishBlue);
  text-align: center;
  padding-top: 3rem;
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding-bottom: 1rem;
  flex-basis: 100%;
`;

const GridSection = () => {
  return (
    <Grid>
      <ResponsiveImage smallSrc={eggImg.smallSrc} largeSrc={eggImg.largeSrc} />
      <TextSection
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
    </Grid>
  );
};

export default GridSection;
