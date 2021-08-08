import React, { useEffect, useState } from "react";
import { Countdown } from "./components/countdown";

function App() {
  return (
    <div className="App">
      <h2>We're Launching Soon</h2>
      <Countdown />
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Made with love by{" "}
        <a href="https://github.com/uarmagan">Ugur Armagan</a>.
      </div>
    </div>
  );
}

export default App;
