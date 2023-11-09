import React from 'react';

import { checkGuess } from '../../game-helpers';

function GameInput({
  setAllGuesses,
  setGuessResult,
  answer,
  setIsGuessCorrect,
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
      />
    </form>
  );
}

export default GameInput;
