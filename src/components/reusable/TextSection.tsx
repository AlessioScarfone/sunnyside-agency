import React from "react";
import styled from "styled-components";
import { flexColumnCenter } from "../../utils/StyleConst";

interface TextSectionProps {
  title: string;
  text: string;
  linkText?: string;
}

const Container = styled.div`
  ${flexColumnCenter}

  h2 {
  }

  p {
  }

  span {
  }
`;

const TextSection = ({ title, text, linkText = "Learn more" }: TextSectionProps) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{linkText}</span>
    </Container>
  );
};

export default TextSection;
