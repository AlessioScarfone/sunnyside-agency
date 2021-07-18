import React from "react";
import styled from "styled-components/macro";

interface TestimonialSectionProps {
  image: string;
  text: string;
  name: string;
  desc?: string;
}

const TestimonialSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
`;

const TestimonialImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const TestimonialText = styled.p`
  padding: 2rem 1rem;
  color: var(--veryDarkGrayishBlue);
`;

const TestimonialName = styled.h4`
  font-weight: 900;
`;

const TestimonialDesc = styled.p`
  padding-top: 0.5rem;
  color: var(--grayishBlue);
`;

const TestimonialSection = ({
  image,
  text,
  name,
  desc,
}: TestimonialSectionProps) => {
  return (
    <TestimonialSectionContainer>
      <TestimonialImg src={image}  alt="testimonil-img"/>
      <TestimonialText>{text}</TestimonialText>
      <TestimonialName>{name}</TestimonialName>
      {desc && <TestimonialDesc>{desc}</TestimonialDesc>}
    </TestimonialSectionContainer>
  );
};

export default TestimonialSection;
