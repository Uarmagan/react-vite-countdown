import { useState, useEffect } from "react";
import { ITimeLeft } from "../types";

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return timeLeft;
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
