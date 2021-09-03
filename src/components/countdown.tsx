import React from "react";
import styled from "styled-components";
import { useCountdown } from "../hooks/countdown";

export const Countdown = () => {
  const timeLeft = useCountdown();
  return (
    <>
      <$CountdownWrapper>
        <div className="days">
          <p>{timeLeft.days}</p>
          <p>Days</p>
        </div>
        <div className="hours">
          <p>{timeLeft.hours}</p>
          <p>Hours</p>
        </div>
        <div className="minutes">
          <p>{timeLeft.minutes}</p>
          <p>Minutes</p>
        </div>
        <div className="seconds">
          <p>{timeLeft.seconds}</p>
          <p>Seconds</p>
        </div>
      </$CountdownWrapper>
    </>
  );
};

const $CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  color: var(--color-white);
`;
