import React from 'react';

function Banner({ hasWon, solution, guesses }) {
  const bannerComponents = {
    null: ' ',
    true: (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in{` `}
          <strong>
            {guesses && `${guesses.length}`} guess{guesses.length > 1 && `es`}
          </strong>
          .
        </p>
      </div>
    ),
    false: (
      <div className='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{solution}</strong>.
        </p>
      </div>
    ),
  };

  return <>{bannerComponents[hasWon]}</>;
}

export default Banner;
