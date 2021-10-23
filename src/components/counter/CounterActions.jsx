import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from './../../redux/counter/counterActions';
import './Counter.css';

function CounterActions() {
  const dispatch = useDispatch();
  const { counterNum } = useSelector((state) => state);

  return (
    <div>
      <div className='d-flex flex-row justify-content-evenly'>
        {counterNum.counter > 0 && (
          <button
            className='btn__decrease btn btn-danger '
            onClick={() => dispatch(decreaseCounter())}>
            -
          </button>
        )}
        {counterNum.counter < 10 && (
          <button
            className='btn__increase btn btn-primary'
            onClick={() => dispatch(increaseCounter())}>
            +
          </button>
        )}
      </div>
      <div className='mt-5'>
        <button
          className='btn__reset btn btn-success w-25'
          onClick={() => dispatch(resetCounter())}>
          <i className='fas fa-redo-alt'></i>
        </button>
      </div>
    </div>
  );
}

export default CounterActions;
