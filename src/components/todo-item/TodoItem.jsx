import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToDoItem } from '../../redux/todo-list/todoActions';

import './TodoItem.css';

function TodoItem() {
  const { todoList } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {}, [todoList]);

  const handleRemove = (item) => {
    dispatch(removeToDoItem(item));
  };

  return (
    <div className='w-100 text-black'>
      {todoList.todoItemsList.map((item, index) => {
        return (
          <div
            className='todo__item d-flex flex-column align-items-center mb-3 bg-white'
            key={item.id}>
            <div className='todo__item__num text-capitalize text-white bg-warning p-1 mb-3'>
              to-do {index + 1}
            </div>
            <div className='d-flex mb-2'>
              <div className='me-5'>
                <span className='fw-bold fs-6'>Title:</span> {item.title}
              </div>
              <div>
                <span className='fw-bold fs-6'>Content:</span> {item.content}
              </div>
            </div>
            <button
              className='remove__btn btn btn-danger w-100'
              onClick={() => handleRemove(item)}>
              <i className='fas fa-trash'></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoItem;
