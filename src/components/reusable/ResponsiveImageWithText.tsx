import React from "react";
import styled from "styled-components/macro";
import ResponsiveImage, { ResponsiveImageProps } from "./ResponsiveImage";

interface ResponsiveImageWithTextProps extends ResponsiveImageProps {
  title: string;
  text: string;
  textColor?: string;
}

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Title = styled.h2<{ textColor: string }>`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 30%;
  font-size: 1.7rem;
  padding: 2rem;
  color: var(${(props) => props.textColor}, hsl(212, 27%, 19%));
`;

const Text = styled.p<{ textColor: string }>`
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 15%;
  padding: 1rem 2rem 0rem 2rem;
  line-height: 1.5rem;
  color: var(${(props) => props.textColor}, hsl(212, 27%, 19%));
`;

const ResponsiveImageWithText = ({
  smallSrc,
  largeSrc,
  mediaSize = 768,
  alt = "img",
  title,
  text,
  textColor = "--darkCyan",
}: ResponsiveImageWithTextProps) => {
  return (
    <Container>
      <ResponsiveImage smallSrc={smallSrc} largeSrc={largeSrc} />
      <Title textColor={textColor}>{title}</Title>
      <Text textColor={textColor}>{text}</Text>
    </Container>
  );
};

export default ResponsiveImageWithText;
