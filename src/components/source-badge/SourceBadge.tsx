import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { ReactComponent as GitHub } from "./github.svg";
import { ReactComponent as Close } from "./x.svg";

const SourceBadgeContainer = styled.a<{ show: boolean }>`
  --fg: #121212d4;
  --bg: white;

  display: flex;
  transform: translateX(${p => p.show ? "0" : "150px"});
  transition: transform 0.45s;
  position: fixed;
  right: 0px;
  top: 25vh;
  width: 70px;
  height: 60px;
  background: var(--bg);
  z-index: 999;
  border-radius: 30px 0 0 30px;
  border-color: var(--fg);
  border-style: solid;
  border-width: 3px 0px 3px 3px;

  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg.feather-github {
    color: var(--fg);
    width: 35px;
    height: 35px;
    margin-left: 14px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  left: -36px;
  top: 14px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    color: #ff4545;
  }
`;

const SourceBadge = ({ url }: { url?: string }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (url) {
      setTimeout(() => {
        setShow(true);
      }, 5000);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = (event: any) => {
    setShow(false);
    event.preventDefault();
  };

  return (
    <SourceBadgeContainer show={show} href={url} target="blank">
      <CloseButton onClick={close}>
        <Close strokeWidth={3}/>
      </CloseButton>
      <GitHub />
    </SourceBadgeContainer>
  );
};

export default SourceBadge;
