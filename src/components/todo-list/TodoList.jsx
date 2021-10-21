import TodoItem from '../todo-item/TodoItem';
import TodoForm from './../todo-form/TodoForm';
import './TodoList.css';

function TodoList() {
  return (
    <section className='todo__list text-center text-white my-5 pt-1 pb-5'>
      <h1 className='text-capitalize my-5 text-white'>to-do </h1>
      <div className='container'>
        <div className='row'>
          <TodoForm />
          <section className='offset-1 col-5 todo__item  d-flex flex-column align-items-center '>
            <TodoItem />
          </section>
        </div>
      </div>
    </section>
  );
}

export default TodoList;
