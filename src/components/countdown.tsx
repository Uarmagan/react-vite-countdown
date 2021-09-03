import React from "react";
import { useCountdown } from "../hooks/countdown";
import { createTheme, style } from "@vanilla-extract/css";
import { CountdownWrapper } from "./countdown.css";
export const Countdown = () => {
  const timeLeft = useCountdown();
  return (
    <>
      <div className={CountdownWrapper}>
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
      </div>
    </>
  );
};
