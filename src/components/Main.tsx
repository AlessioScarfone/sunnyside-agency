import React from "react";
import ResponsiveImage from "./reusable/ResponsiveImage";
import { HeaderImg } from "./reusable/Images";
import styled from "styled-components";

const FloatTitle = styled.h1`
position: absolute;
color: var(--white);
font-family: 'Fraunces', serif;
font-size: 1.2rem;
width: 100%;
padding: 1.5rem;
text-align: center;
font-weight: 900;
letter-spacing: 4px;
top: 4rem;


@media (min-width: 768px) {
    font-size: 3rem;
    top: 6rem;
}
`

const Main = () => {

  return (
    <section>
      <FloatTitle>WE ARE CREATIVES</FloatTitle>
      <div style={{width:"100vw"}}>
        <ResponsiveImage
          smallSrc={HeaderImg.smallSrc}
          largeSrc={HeaderImg.largeSrc}
        />
      </div>
    </section>
  );
};

export default Main;
