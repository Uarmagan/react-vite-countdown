import React, { useEffect, useState } from "react";
import { Countdown } from "./components/countdown";
import styled from "styled-components";
import { ReactComponent as hills } from "./assets/pattern-hills.svg";
import { ReactComponent as bgStars } from "./assets/bg-stars.svg";

function App() {
  return (
    <div className="App">
      <$wrapper>
        <h2>We're Launching Soon</h2>
        <Countdown />
        <$bgStars />
        <$styledHills />
      </$wrapper>
    </div>
  );
}

const $wrapper = styled.div`
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 600px;
  /* align-content: flex-start; */
  align-items: center;
  text-transform: uppercase;

  h2 {
    font-size: 1.3em;
    letter-spacing: 0.3em;
    margin-bottom: 128px;
    color: var(--color-white);
  }
`;

const $styledHills = styled(hills)`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const $bgStars = styled(bgStars)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default App;
