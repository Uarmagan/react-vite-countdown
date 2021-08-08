import React from "react";
import styled from "styled-components";
import { useCountdown } from "../hooks/countdown";

export const Countdown = () => {
  const timeLeft = useCountdown();
  return (
    <>
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
    </>
  );
};

const $CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
`;
