import React, { useRef } from "react";
import styled from "styled-components";
import { useCountdown } from "../hooks/countdown";
import TimeUnit from "./timeUnit";

export const Countdown = () => {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <>
      <$CountdownWrapper>
        <TimeUnit unitNumber={days} unitName="Days" />
        <TimeUnit unitNumber={hours} unitName="Hours" />
        <TimeUnit unitNumber={minutes} unitName="Minutes" />
        <TimeUnit unitNumber={seconds} unitName="seconds" />
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
