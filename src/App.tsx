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
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Made with love by{" "}
          <a href="https://github.com/uarmagan">Ugur Armagan</a>.
        </div>
        <$bgStars />
        <$styledHills />
      </$wrapper>
    </div>
  );
}

const $wrapper = styled.div`
  color: grey;
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
