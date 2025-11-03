import React from 'react'
import {
  createBrowserRouter
} from "react-router-dom";
import App from './App';
import Home from './pages/Home/Home';
import AdminDashboard from './pages/DashBoard/AdminDashboard';
import CustomerDashboard from './pages/DashBoard/CustomerDashboard';
import StaffDashboard from './pages/DashBoard/StaffDashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


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
          element: <Login />

        },
        {
          path: "/Register",
          element: <Register />

        },
        {
          path: "/AdminDashboard",
          element: <AdminDashboard />,
        },
        {
          path: "/CustomerDashboard",
          element: <CustomerDashboard />,

        },
        {
          path: "/StaffDashboard",
          element: <StaffDashboard />,
        }


      ]
    }
  ])

export default projectroute
