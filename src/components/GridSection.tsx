import React from "react";
import styled from "styled-components";
import { flexColumnCenter } from "../utils/StyleConst";
import { EggImg } from "./reusable/Images";
import ResponsiveImage from "./reusable/ResponsiveImage";
import TextSection from "./reusable/TextSection";

const Grid = styled.div`
  ${flexColumnCenter}
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
      <ResponsiveImage smallSrc={EggImg.smallSrc} largeSrc={EggImg.largeSrc} />
      <TextSection title="Trasfrom your brand" text="bla bla bla"></TextSection>
    </Grid>
  );
};

export default GridSection;
