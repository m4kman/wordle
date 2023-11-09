import React from 'react';

import { range } from '../../utils';
function Guess({ guess, guessResult }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        if (guessResult !== undefined) console.log(guessResult[num]);
        return (
          <span
            key={num}
            className={
              guessResult !== undefined &&
              guessResult[num].letter === guess[num]
                ? `cell ${guessResult[num].status}`
                : 'cell'
            }
          >
            {guess ? guess[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
