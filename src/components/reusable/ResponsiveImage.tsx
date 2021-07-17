import React from "react";
import styled from "styled-components/macro";

export interface ResponsiveImageProps {
  smallSrc: string;
  largeSrc?: string;
  mediaSize?: number;
  alt?: string;
}

const Image = styled.img<{ mediaSize?: number }>`
  display: none;
  max-width: 100%;
  height: auto;
  object-fit: fill;
`;

const MediaImgSmall = styled(Image)`
  @media (max-width: ${(props) => props.mediaSize}px) {
    display: block;
  }
`;

const MediaImgBig = styled(Image)`
  @media (min-width: ${(props) => props.mediaSize}px) {
    display: block;
  }
`;

const ResponsiveImage = ({
  smallSrc,
  largeSrc,
  mediaSize = 768,
  alt = "img",
}: ResponsiveImageProps) => {
  return (
    <>
      <MediaImgSmall src={smallSrc} alt={alt} mediaSize={mediaSize} />
      <MediaImgBig src={largeSrc} alt={alt} mediaSize={mediaSize} />
    </>

    // <picture>
    //     <source media="(max-width: 768px)" src={smallSrc}/>
    //     <source media="(min-width: 768px)" src={largeSrc}/>
    //     <img src={largeSrc} alt={alt}/>
    // </picture>
  );
};

export default ResponsiveImage;
