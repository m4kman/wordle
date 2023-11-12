import React from 'react';

import Banner from '../Banner';

function GameLostBanner({ answer, restart, restartText }) {
  return (
    <Banner type="sad">
      <p>
        You ran out of guesses! The correct answer is <strong>{answer}</strong>.
      </p>
      <button className="restart-button" onClick={restart}>
        {restartText}
      </button>
    </Banner>
  );
}

export default GameLostBanner;
