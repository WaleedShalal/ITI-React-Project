import React from 'react';
import './Counter.css';

function Counter(props) {
  const { counter, increaseCounter, decreaseCounter, resetCounter } = props;
  return (
    <section className='counter__wrapper d-flex flex-column '>
      <h1 className='text-capitalize text-secondary fw-bold mb-3'>
        counter app
      </h1>
      {counter <= 10 ? (
        <h2 className='text-white mb-5 fs-1 fw-bold'>{counter}</h2>
      ) : (
        alert('The Reach To Maximum Number')
      )}
      <div className='d-flex flex-row justify-content-evenly'>
        <button
          className='btn__decrease btn btn-danger '
          onClick={() => decreaseCounter()}>
          -
        </button>
        <button
          className='btn__increase btn btn-primary'
          onClick={() => increaseCounter()}>
          +
        </button>
      </div>
      <div className='mt-5'>
        <button
          className='btn__reset btn btn-success w-25'
          onClick={() => resetCounter()}>
          <i className='fas fa-redo-alt'></i>
        </button>
      </div>
    </section>
  );
}

export default Counter;
