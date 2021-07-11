import React from "react";
import styled from "styled-components";

interface ResponsiveImageProps {
  smallSrc: string;
  largeSrc?: string;
  mediaSize?: number;
  alt?: string;
}


const MediaImgSmall = styled.img<{mediaSize?: number}>`
  display: none;
  @media (max-width: ${(props) => props.mediaSize}px) {
    display: block;
  }
  width: 100%; 
  object-fit: contain;
`;

const MediaImgBig = styled.img<{mediaSize?: number}>`
  display: none;
  @media (min-width: ${(props) => props.mediaSize}px) {
    display: block;
  }
  width: 100%; 
  object-fit: contain;
`;

const ResponsiveImage = ({
  smallSrc,
  largeSrc,
  alt = "img",
}: ResponsiveImageProps) => {

  return (
    <>
      <MediaImgSmall src={smallSrc} alt={alt} mediaSize={768}/>
      <MediaImgBig src={largeSrc} alt={alt} mediaSize={768}/>
    </>

    // <picture>
    //     <source media="(max-width: 768px)" src={smallSrc}/>
    //     <source media="(min-width: 768px)" src={largeSrc}/>
    //     <img src={largeSrc} alt={alt}/>
    // </picture>
  );
};

export default ResponsiveImage;
