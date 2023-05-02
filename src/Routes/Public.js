import React from 'react';
import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Detalle from '../Pages/Detalle';
import NotFound from '../Pages/NotFound';
import{
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function Public() {
    return(
      <Routes>
          <Route path='/alta' element={<Registro />}/>
          <Route path='/ingresar' element={<Login />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Navigate to="/" />}/>
        <Route path='/producto/:id' element={<Detalle />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    );
}

export default Public
