import * as actionTypes from './todoTypes';

export const addToDoItem = (todoItem) => {
  return {
    type: actionTypes.ADD_TODO_ITEM,
    payload: todoItem,
  };
};

export const removeToDoItem = (todoItem) => {
  return {
    type: actionTypes.REMOVE_TODO_ITEM,
    payload: todoItem,
  };
};
