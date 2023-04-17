import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
  // {
  //   path: '/Login',
  //   element: <Login />
  // },
  // {
  //   path: '/Register',
  //   element: <Register />
  // }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
)