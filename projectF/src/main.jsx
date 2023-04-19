import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
import About from './About';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import AddActivity from './AddActivity';


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
  },
  {
    path: '/Register',
    element: <Register />
  },
  {
    path: '/Dashboard',
    element: <Dashboard />
  },
  {
    path: '/AddActivity',
    element: <AddActivity />
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
  </div>
)