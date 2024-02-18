import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataState from './Components/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataState>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </DataState>
);

