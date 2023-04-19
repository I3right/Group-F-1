import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
import About from './About';
import Login from './Login';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/Login',
    element: <Login />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
  </div>
)