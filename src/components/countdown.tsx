import React, { useRef } from "react";
import styled from "styled-components";
import { useCountdown } from "../hooks/countdown";
import TimeUnit from "./timeUnit";

export const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown();
  // const countdownNumberEl = useRef(null);
  return (
    <>
      <$CountdownWrapper>
        <TimeUnit unitNumber={days} unitName="Days" />
        <TimeUnit unitNumber={hours} unitName="Hours" />
        <TimeUnit unitNumber={minutes} unitName="Minutes" />
        <TimeUnit unitNumber={seconds} unitName="seconds" />
        {/* <$CircleWrapper>
          <div className="count">21</div>
          <svg>
            <circle r="18" cx="20" cy="20"></circle>
          </svg>
        </$CircleWrapper> */}
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