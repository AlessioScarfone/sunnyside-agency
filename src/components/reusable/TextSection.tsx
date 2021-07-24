import React from "react";
import styled from "styled-components/macro";

interface TextSectionProps {
  title: string;
  text: string;
  linkText?: string;
  linkColor?: string; //css variable string
  className?: string, //user for styled component extend
}

const Container = styled.div<{ linkColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  max-width: 100%;
  min-height: 350px;

  h1 {
    font-size: clamp(2rem, 8vw - 2rem, 2.6rem);
    padding-bottom: 1.5rem;
    color: var(--veryDarkBlue);
  }

  p {
    color: var(--veryDarkGrayishBlue);
    padding-bottom: clamp(1.5rem, 8vw - 2rem, 2rem);
  }

  span {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Fraunces", serif;
    color: var(--veryDarkBlue);

    &:before {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background-color: var(${(props) => props.linkColor}, hsl(51, 100%, 49%));
      height: 8px;
      opacity: 30%;
    }
  }
`;

const TextSection = ({
  title,
  text,
  linkText = "Learn more",
  linkColor = "--yellow",
  className,
}: TextSectionProps) => {
  return (
    <Container linkColor={linkColor} className={className}>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{linkText}</span>
    </Container>
  );
};

export default TextSection;
