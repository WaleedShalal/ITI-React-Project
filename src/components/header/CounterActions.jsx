import React, { useState } from 'react';
import Counter from './Counter';

function CounterAcions() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = (value = 1) => {
    setCounter(counter + value);
  };

  const decreaseCounter = (value = 1) => {
    counter && setCounter(counter - value);
  };

  const resetCounter = (value = 1) => {
    setCounter(0);
  };
  return (
    <div className='text-center'>
      <Counter
        counter={counter}
        increaseCounter={increaseCounter}
        decreaseCounter={decreaseCounter}
        resetCounter={resetCounter}
      />
    </div>
  );
}

export default CounterAcions;
