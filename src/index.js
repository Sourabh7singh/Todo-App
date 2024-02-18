import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataState from './Components/DataContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Components/About';
import Featues from './Components/Featues';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/features",
    element:<Featues/>
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

