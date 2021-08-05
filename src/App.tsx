import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useCountdown } from "./hooks/countdown";

function App() {
  const timeLeft = useCountdown();
  return (
    <div className="App">
      <header className="App-header">
        <h2>We're Launching Soon</h2>
        <div className="countdown">
          <$CountdownWrapper>
            <div className="days">
              <p>Days</p>
              <p>{timeLeft.days}</p>
            </div>
            <div className="hours">
              <p>Hours</p>
              <p>{timeLeft.hours}</p>
            </div>
            <div className="minutes">
              <p>Minutes</p>
              <p>{timeLeft.minutes}</p>
            </div>
            <div className="seconds">
              <p>Seconds</p>
              <p>{timeLeft.seconds}</p>
            </div>
          </$CountdownWrapper>
        </div>
      </header>
    </div>
  );
}

const $CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
`;

export default App;
