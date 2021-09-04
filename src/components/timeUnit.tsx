import React from "react";
import styled from "styled-components";

interface TimeUnitProps {
  unitNumber: number;
  unitName: string;
}

function TimeUnit(props: TimeUnitProps) {
  return (
    <$CircleWrapper>
      <p>{props.unitNumber}</p>
      <p>{props.unitName}</p>
      <$CircleSVG>
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

const $CircleSVG = styled.div`
  svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);
  }
  svg circle {
  }
  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 113px;
    }
  }
`;
const $StyledCircle = styled.circle``;
const $CircleWrapper = styled.div`
  position: relative;
  margin: auto;
  margin-top: 100px;
  height: 40px;
  width: 40px;
  text-align: center;
`;
const count = styled.div`
  color: white;
  display: inline-block;
  line-height: 40px;
`;

export default TimeUnit;
