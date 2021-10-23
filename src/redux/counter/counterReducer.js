import * as actionTypes from './counterTypes';

const initialState = {
  counter: 0,
};

export const counterNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.RESET_COUNTER:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};
