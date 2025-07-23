import React from 'react';
import ReactDOM from 'react-dom/client'; 
import {BrowserRouter} from 'react-router-dom';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Website from './Website';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <BrowserRouter>
          <Website/>
    </BrowserRouter>
    
  </>
);