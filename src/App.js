import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Contactus from'./Pages/Contactus/Contactus';
function App() {
  return (
  <div className='App'>
     <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="signin" element={<Signin/> } />
        <Route path="signup" element={<Signup/> } />
        <Route path="contactus" element={<Contactus></Contactus>}/>
        </Routes>
  </div>

  )
}

export default App;
