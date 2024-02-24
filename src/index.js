import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataState from './Components/DataContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataState>
    <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
  </DataState>
);

