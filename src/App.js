import logo from './logo.svg';
import React from 'react'
import './App.css';
import Login from './pages/Login';
import Cover from './pages/Cover';
import Form from './component/redux/Form';
import Home from './component/redux/Home';
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
