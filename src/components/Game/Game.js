import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from '../GameInput';
import GuessResult from '../GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [allGuesses, setAllGuesses] = React.useState([]);
  const [guessResult, setGuessResult] = React.useState([]);
  const [isGuessCorrect, setIsGuessCorrect] = React.useState(false);

  console.log(guessResult);

  return (
    <>
      <GuessResult guesses={allGuesses} guessResult={guessResult} />
      {!isGuessCorrect ? (
        allGuesses.length < 6 ? (
          <GameInput
            setAllGuesses={setAllGuesses}
            setGuessResult={setGuessResult}
            answer={answer}
            setIsGuessCorrect={setIsGuessCorrect}
          />
        ) : (
          <div class="sad banner">
            <p>
              You ran out of guesses! The correct answer is{' '}
              <strong>{answer}</strong>.
            </p>
          </div>
        )
      ) : (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Game;
