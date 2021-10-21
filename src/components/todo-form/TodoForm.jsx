import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToDoItem } from '../../redux/todo-list/todoActions.js';
import './TodoForm.css';

function TodoForm() {
  const { todoList } = useSelector((state) => state);
  const dispatch = useDispatch();
  const todoTitle = useRef();
  const [todoInputs, setTodoInputs] = useState({
    title: '',
    content: '',
    id: '',
  });
  const [size, setSize] = useState();
  useEffect(() => {
    todoTitle.current.focus();
    todoList.todoItemsList.length ? setSize('col-6') : setSize('col-12');
  }, [todoList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoInputs({
      ...todoInputs,
      [name]: value,
      id: Math.random(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInputs.title && todoInputs.content) {
      dispatch(addToDoItem(todoInputs));
      setTodoInputs({ title: '', content: '' });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`${size} d-flex flex-column align-items-center`}>
      <div className='mb-3 w-100 text-start'>
        <label
          htmlFor='todo-title'
          className='form-label text-capitalize fw-bold'>
          todo title
        </label>
        <input
          type='text'
          className='form-control'
          id='todo-title'
          ref={todoTitle}
          onChange={handleChange}
          name='title'
          value={todoInputs.title}
        />
      </div>
      <div className='mb-3 w-100  text-start'>
        <label
          htmlFor='todo-content'
          className='form-label text-capitalize fw-bold'>
          todo content
        </label>
        <input
          type='text'
          className='form-control'
          id='todo-content'
          onChange={handleChange}
          name='content'
          value={todoInputs.content}
        />
      </div>
      <button className='add__btn btn btn-primary text-capitalize w-25'>
        add
      </button>
    </form>
  );
}

export default TodoForm;
