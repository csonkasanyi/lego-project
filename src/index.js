import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import Legos from './components/Legos';
import About from './components/About';
import Contacts from './components/Contact';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

ReactDOM.render(
  <React.StrictMode>
    <ResponsiveAppBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/legos" element={<Legos/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
