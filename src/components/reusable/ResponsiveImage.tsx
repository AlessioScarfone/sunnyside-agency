import React from "react";
import styled from "styled-components/macro";

export interface ResponsiveImageProps {
  smallSrc: string;
  largeSrc?: string;
  mediaSize?: number;
  alt?: string;
}

const Image = styled.img<{ mediaSize: number }>`
  display: none;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const MediaImgSmall = styled(Image)`
  @media (max-width: ${(props) => props.mediaSize}px) {
    display: block;
  }
`;

const MediaImgBig = styled(Image)`
  @media (min-width: ${(props) => props.mediaSize + 1}px) {
    display: block;
  }
`;

const ImgContainer = styled.div`
  width: 100%;
`;

const ResponsiveImage = ({
  smallSrc,
  largeSrc,
  mediaSize = 770,
  alt = "img",
}: ResponsiveImageProps) => {
  return (
    <ImgContainer>
      <MediaImgSmall src={smallSrc} alt={alt} mediaSize={mediaSize} />
      <MediaImgBig src={largeSrc} alt={alt} mediaSize={mediaSize} />
    </ImgContainer>

  );
};

export default ResponsiveImage;
