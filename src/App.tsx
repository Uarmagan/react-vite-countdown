import React, { useState } from 'react';
import { Countdown } from './components/countdown';
import styled from 'styled-components';
import { ReactComponent as hills } from './assets/pattern-hills.svg';
import { ReactComponent as bgStars } from './assets/bg-stars.svg';

function App() {
  const today = new Date().toISOString();
  const [endDate, setEndDate] = useState<string>(today);
  const [dateSelected, setDateSelected] = useState<boolean>(false);
  return (
    <div className='App'>
      <$wrapper>
        {dateSelected ? (
          <div>
            <h2>Counting Down The Days</h2>
            <Countdown endDate={endDate} />
          </div>
        ) : (
          <$inputLayout>
            <label htmlFor='EndDate'>Choose a time for your appointment:</label>
            <input
              type='datetime-local'
              name='endDate'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={today}
            />
            <button type='button' onClick={() => setDateSelected(true)}>
              Lets count down
            </button>
          </$inputLayout>
        )}
        <$bgStars />
        <$styledHills />
      </$wrapper>
    </div>
  );
}

const $wrapper = styled.div`
  color: grey;
  display: flex;
  flex-direction: column;
  height: 600px;
  align-content: flex-start;
  align-items: center;
  text-transform: uppercase;

  h2 {
    font-size: 1.4em;
    letter-spacing: 0.3em;
    margin-bottom: 128px;
    color: var(--color-white);
  }
`;

const $styledHills = styled(hills)`
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const $bgStars = styled(bgStars)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const $inputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export default App;
