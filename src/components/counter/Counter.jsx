import React from 'react';
import { useSelector } from 'react-redux';
import CounterActions from './CounterActions';

function Counter() {
  const { counterNum } = useSelector((state) => state);
  return (
    <section className='text-center counter__wrapper d-flex flex-column'>
      <h1 className='text-capitalize text-secondary fw-bold mb-3'>
        counter app
      </h1>
      <h2 className='text-white mb-5 fs-1 fw-bold'>{counterNum.counter}</h2>
      <CounterActions />
    </section>
  );
}

export default Counter;
