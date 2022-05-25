import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App saludo="Propiedad Props o Parametro">
    <h1> Propiedad Children </h1>
  </App>,
  document.getElementById('root')
);
