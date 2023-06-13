import React, {FC} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyled from "./components/styles/Global";

const App: FC = () => {
  return (
      <>
          <GlobalStyled/>
        <BrowserRouter>
            <ToastContainer/>
          <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='not-found' element={<NotFound/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
