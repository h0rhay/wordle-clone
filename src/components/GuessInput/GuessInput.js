import React from 'react';

function GuessInput({ guesses, setGuesses, solution, hasWon, setHasWon }) {
  const [guess, setGuess] = React.useState({ id: '', label: '' });

  const handleChange = (event) => {
    setGuess({
      id: guesses.length + 1,
      label: event.target.value.toUpperCase(),
    });
  };

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        const isValidGuess = guess.label.length === 5;
        if (!isValidGuess) return;
        setGuess({ id: '', label: '' });
        const newGuesses = [...guesses, guess];
        setGuesses(newGuesses);
        const winningMatch = newGuesses.some(
          (guess) => guess.label === solution
        );
        // if number of tries is equal to 6 and winningMatch is false, then setHasWon to false
        if (newGuesses.length === 6 && !winningMatch) {
          setHasWon(false);
        } else if (winningMatch) {
          setHasWon(true);
        }
      }}>
      {console.log('input render', hasWon)}
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess.label}
        onChange={(event) => handleChange(event)}
        minLength='5'
        maxLength='5'
        pattern='[A-Za-z]*'
        title='Input must be alphabetic and 5-10 characters long'
      />
    </form>
  );
}

export default GuessInput;
