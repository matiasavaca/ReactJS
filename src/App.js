import React from 'react';
import './App.css';
import Public from './Routes/Public';
import Menu from './Componentes/Menu';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Menu />
      <Public />
    </Router>
  );
}

export default App
