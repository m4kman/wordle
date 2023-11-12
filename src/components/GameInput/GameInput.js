import React from 'react';

import { checkGuess } from '../../game-helpers';
import KeyboardAlphabet from '../KeyboardAlphabet';

function GameInput({
  setAllGuesses,
  guessResult,
  setGuessResult,
  answer,
  setIsGuessCorrect,
  disabled,
}) {
  const [guess, setGuess] = React.useState('');

  function guessSubmit(e) {
    e.preventDefault();
    setGuessResult((prevResults) => [
      ...prevResults,
      checkGuess(guess, answer),
    ]);
    setAllGuesses((prevGuesses) => [...prevGuesses, guess]);
    if (guess === answer) setIsGuessCorrect(true);
    setGuess('');
  }

  return (
    <div>
      <form onSubmit={guessSubmit} className="guess-input-wrapper">
        <label className="guess-input" htmlFor="guess">
          Enter your guess:
        </label>
        <input
          id="guess"
          maxLength={5}
          pattern="[A-Za-z]{5}"
          title="Please enter five alphabet words only."
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          disabled={disabled}
        />
      </form>
      <div className="keyboard-layout">
        {!disabled && <KeyboardAlphabet guessResult={guessResult} />}
      </div>
    </div>
  );
}

export default GameInput;
