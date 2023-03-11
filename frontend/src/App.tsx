import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='not-found' element={<NotFound/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
