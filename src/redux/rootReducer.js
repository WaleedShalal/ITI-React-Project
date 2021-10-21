import { combineReducers } from 'redux';
import * as todoReducer from './todo-list/todoReducer';

const rootReducer = combineReducers({
  todoList: todoReducer.todoListReducer,
});

export default rootReducer;
