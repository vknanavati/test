import {Link, Routes, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {Contact} from './components/Contact';
import {Counter} from './components/Counter';
import {ToDoList} from './components/ToDoList';
import {AppBar, Toolbar, Box} from '@mui/material';


function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{display: "flex", gap:2}}>
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/todo">ToDoList</Link>
            <Link to="/contact">Contact</Link>
          </Box>
        </Toolbar>
      </AppBar>
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

