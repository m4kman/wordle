import React from 'react';

const keyboard = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(guessResult) {
  let lettersStatus = {};

  if (guessResult !== undefined) {
    guessResult.forEach((guess) => {
      guess.forEach(({ letter, status }) => {
        lettersStatus[letter] = status;
      });
    });
  }
  return lettersStatus;
}

function KeyboardAlphabet({ guessResult }) {
  let statusByLetter = getStatusByLetter(guessResult);

  return keyboard.map((row) =>
    row.map((letter) => (
      <p key={letter} className={`letter ${statusByLetter[letter] || ''}`}>
        {letter}
      </p>
    ))
  );
}

export default KeyboardAlphabet;
