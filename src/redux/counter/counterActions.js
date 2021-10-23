import * as actionTypes from './counterTypes';

export const increaseCounter = () => {
  return {
    type: actionTypes.INCREASE_COUNTER,
  };
};

export const decreaseCounter = () => {
  return {
    type: actionTypes.DECREASE_COUNTER,
  };
};

export const resetCounter = () => {
  return {
    type: actionTypes.RESET_COUNTER,
  };
};
