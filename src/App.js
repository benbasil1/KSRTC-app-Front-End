import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';


function App() {
  return (
    <div >
      <Nav/>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<AddBus/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
