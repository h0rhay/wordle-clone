import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, solution }) {
  const guessResult = guess ? checkGuess(guess.label, solution) : null;
  const letters = guessResult || guess || range(5).map(() => ' ');

  return (
    <>
      {letters.map((letter, index) => {
        const letterValue = guessResult ? letter.letter : letter;
        const status = guessResult ? letter.status : '';
        return (
          <span
            key={`letter-${index}`}
            className={`cell ${status}`}>
            {letterValue}
          </span>
        );
      })}
    </>
  );
}

export default Guess;
