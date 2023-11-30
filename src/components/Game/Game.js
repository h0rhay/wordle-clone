import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [solution, setSolution] = React.useState(answer);
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(null);

  useEffect(() => {
    setSolution(answer);
  }, []);

  return (
    <>
      <div className='guess-results'>
        {/* 
          Render rows 
          render an empty row unless we have a guess
          otherwise render a guess
        */}
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
          const guess = guesses[index];
          return guess ? (
            <p
              key={`guess-${guess.id}`}
              className='guess'>
              <Guess
                guess={guess}
                solution={solution}
              />
            </p>
          ) : (
            <p
              className='guess'
              key={`empty-${index}`}>
              <Guess />
            </p>
          );
        })}
      </div>
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        solution={solution}
        hasWon={hasWon}
        setHasWon={setHasWon}
      />
      {console.log('game render', hasWon)}
      <Banner
        hasWon={hasWon}
        solution={solution}
        guesses={guesses}
      />
    </>
  );
}

export default Game;
