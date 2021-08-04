import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { ITimeLeft } from "./types";

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>We're Launching Soon</h2>
        <p>countdown</p>
        <div className="countdown">
          <$CountdownWrapper>
            <div className="days">
              <p>Days</p>
              <p>{timeLeft.days}</p>
            </div>
            <div className="hours">
              <p>Days</p>
              <p>{timeLeft.hours}</p>
            </div>
            <div className="minutes">
              <p>Days</p>
              <p>{timeLeft.minutes}</p>
            </div>
            <div className="seconds">
              <p>Days</p>
              <p>{timeLeft.seconds}</p>
            </div>
          </$CountdownWrapper>
        </div>
      </header>
    </div>
  );
}

const calculateTimeLeft = (): ITimeLeft => {
  let year = new Date().getFullYear();
  const difference: number = +new Date(`10/01/${year}`) - +new Date();

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
};

const $CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
`;

export default App;
