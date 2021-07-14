import React from "react";
import styled from "styled-components/macro";

interface TextSectionProps {
  title: string;
  text: string;
  linkText?: string;
  linkColor?: string; //css variable string
}

const Container = styled.div<{ linkColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  max-width: 100%;
  text-align: center;
  min-height: 350px;

  h1 {
    font-size: 2rem;
    padding-bottom: 1.5rem;
    color: var(--veryDarkBlue);
  }

  p {
    color: var(--grayishBlue);
    padding-bottom: 1.5rem;
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
}: TextSectionProps) => {
  return (
    <Container linkColor={linkColor}>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{linkText}</span>
    </Container>
  );
};

export default TextSection;
