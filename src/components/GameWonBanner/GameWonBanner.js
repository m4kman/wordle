import React from 'react';
import Banner from '../Banner';

function GameWonBanner({ guessesLength, restart, restartText }) {
  return (
    <Banner type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {guessesLength === 1 ? '1 guess' : `${guessesLength} guesses`}
        </strong>
        .
      </p>
      <button className="restart-button" onClick={restart}>
        {restartText}
      </button>
    </Banner>
  );
}

export default GameWonBanner;
