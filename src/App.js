import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CounterAcions from './components/header/CounterActions';
import Navbar from './components/navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home/Home';
import ProductDetails from './components/product-details/ProductDetails';
import TodoList from './components/todo-list/TodoList';

function App() {
  return (
    <BrowserRouter>
      <div className='App container'>
        <Navbar />
        <Switch>
          <Route component={ProductDetails} path='/product-details/:id' />
          <Route component={CounterAcions} path='/CounterAcions' />
          <Route component={TodoList} path='/todo-list' />
          <Route component={Home} path='/' exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
