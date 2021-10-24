import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProductDetails from './components/product-details/ProductDetails';
import TodoList from './components/todo-list/TodoList';
import LoginForm from './components/form/login-form/LoginForm';
import RegisterForm from './components/form/register-form/RegisterForm';
import Counter from './components/counter/Counter';
import ProductsList from './components/products-list/ProductsList';
import Home from './components/home/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='App container'>
        <Navbar />
        <Switch>
          <Route component={ProductDetails} path='/product-details/:id' />
          <Route component={ProductsList} path='/products' />
          <Route component={Counter} path='/counter' />
          <Route component={TodoList} path='/todo-list' />
          <Route component={LoginForm} path='/login' />
          <Route component={RegisterForm} path='/register' />
          <Route component={Home} path='/home' />
          <Route component={Home} path='/' exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
