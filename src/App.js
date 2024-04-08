import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddBus from './components/AddBus';
import Viewall from './components/Viewall';
import Delete from './components/Delete';
import Search from './components/Search';
import Ksrtc from './components/Ksrtc';


function App() {
  return (
    <div >
      <Nav/>
      
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<AddBus/>}/>
        <Route path='/viewall' element={<Viewall/>}/>
        <Route path='delete' element={<Delete/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='ksrtc' element={<Ksrtc/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
