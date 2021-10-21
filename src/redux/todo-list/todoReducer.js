import * as actionTypes from './todoTypes';

const initialState = {
  todoItemsList: [],
};

export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO_ITEM:
      return {
        ...state,
        todoItemsList: [...state.todoItemsList, action.payload],
      };
    case actionTypes.REMOVE_TODO_ITEM:
      let updatedTodoList = state.todoItemsList.filter((item) => {
        return item.id !== action.payload.id;
      });
      return {
        ...state,
        todoItemsList: updatedTodoList,
      };
    default:
      return state;
  }
};
