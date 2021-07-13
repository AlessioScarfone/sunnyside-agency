import React from "react";
import styled from "styled-components/macro";
import { eggImg, glassImg, designImg } from "./reusable/Images";
import ResponsiveImage from "./reusable/ResponsiveImage";
import TextSection from "./reusable/TextSection";
import { textSectionData } from "../utils/Constants";
import ResponsiveImageWithText from "./reusable/ResponsiveImageWithText";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-row: 1fr 1fr 1fr;
    grid-column: 1fr 1fr;
  }
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
    </Grid>
  );
};

export default GridSection;
