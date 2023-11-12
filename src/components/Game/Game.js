import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from '../GameInput';
import GuessResult from '../GuessResult';
import GameWonBanner from '../GameWonBanner/GameWonBanner';
import GameLostBanner from '../GameLostBanner/GameLostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [allGuesses, setAllGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessResult, setGuessResult] = React.useState([]);
  const [isGuessCorrect, setIsGuessCorrect] = React.useState(false);

  function restartGame() {
    setAnswer(sample(WORDS));
    setAllGuesses([]);
    setGuessResult([]);
    setIsGuessCorrect(false);
  }

  console.info({ answer });

  return (
    <>
      <GuessResult guesses={allGuesses} guessResult={guessResult} />

      <GameInput
        setAllGuesses={setAllGuesses}
        setGuessResult={setGuessResult}
        guessResult={guessResult}
        answer={answer}
        setIsGuessCorrect={setIsGuessCorrect}
        disabled={
          isGuessCorrect || allGuesses.length === NUM_OF_GUESSES_ALLOWED
        }
      />
      {isGuessCorrect && (
        <GameWonBanner
          guessesLength={allGuesses.length}
          restart={restartGame}
          restartText="Click to Play again"
        />
      )}
      {!isGuessCorrect && allGuesses.length === NUM_OF_GUESSES_ALLOWED && (
        <GameLostBanner
          answer={answer}
          restart={restartGame}
          restartText="Give it another shot!"
        />
      )}
    </>
  );
}

export default Game;
