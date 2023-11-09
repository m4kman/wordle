import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResult({ guesses, guessResult }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} guess={guesses[num]} guessResult={guessResult[num]} />
      ))}
    </div>
  );
}

export default GuessResult;
