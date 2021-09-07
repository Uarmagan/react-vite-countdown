import React from "react";
import styled, { keyframes } from "styled-components";

interface TimeUnitProps {
  unitNumber: number;
  unitName: string;
}

function TimeUnit(props: TimeUnitProps) {
  return (
    <$CircleWrapper>
      <p>{props.unitNumber}</p>
      <p>{props.unitName}</p>
      <$CircleSVG duration={props.unitNumber}>
        <svg>
          <circle r="18" cx="20" cy="20"></circle>
        </svg>
      </$CircleSVG>
    </$CircleWrapper>
  );
}

// const $UnitOfTime = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
const CountdownAnimation = keyframes`
  from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 113px;
    }
`;
type circlePropType = {
  duration: number;
};
const $CircleSVG = styled.div<circlePropType>`
  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }
  svg circle {
    stroke-dasharray: 113px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 2px;
    stroke: white;
    fill: none;
    /* animation: countdown 10s linear infinite forwards; */
    animation-name: ${CountdownAnimation};
    animation-duration: ${(props) => props.duration}s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
  }
`;

const $CircleWrapper = styled.div`
  position: relative;
  margin: auto;
  margin-top: 100px;
  height: 40px;
  width: 40px;
  text-align: center;
`;
const $count = styled.div`
  line-height: 40px;
`;

export default TimeUnit;
