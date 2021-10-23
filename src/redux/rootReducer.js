import { combineReducers } from 'redux';
import * as todoReducer from './todo-list/todoReducer';
import * as counterReducer from './counter/counterReducer';
import * as productsReducer from './products/productReducer';

const rootReducer = combineReducers({
  todoList: todoReducer.todoListReducer,
  counterNum: counterReducer.counterNumberReducer,
  getProducts: productsReducer.fetchProductsReducer,
});

export default rootReducer;
