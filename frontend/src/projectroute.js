import React from 'react'
import {
  createBrowserRouter
} from "react-router-dom";
import App from './App';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';





const projectroute = createBrowserRouter(
  [
  {
    
    path: "/",
    element: <App />,

    children: [
      {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        

    ]
  }
])

export default projectroute
