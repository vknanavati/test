import {Link, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Contact} from './components/Contact';
import {Counter} from './components/Counter';
import {ToDoList} from './components/ToDoList';


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/todo">ToDoList</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/todo" element={<ToDoList/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;

