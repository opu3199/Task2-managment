import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Mainlayout/Mainlayout';
import Login from './Component/Login';
import Home from './Component/Home';
import About from './Component/About';
import Register from './Component/Register';
import Authprovider from './Hook/Authprovider';
import Dashboard from './Component/Dashboard';
import Task from './Component/Task';
import Taskmanagment from './Component/taskmanagment';
import Privateroute from './Hook/Privateroute';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/register',
        element:<Register></Register>

      },
      {
        path:'/dashboard',
        element:<Privateroute><Dashboard></Dashboard></Privateroute>
      },
      {
        path:'/task',
        element:<Task></Task>
      },
      {
        path:'/managment',
        element:<Taskmanagment></Taskmanagment>,
        loader:()=>fetch('https://task-managment-server-two.vercel.app/addtask')

      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router} /> 

    </Authprovider>
  </React.StrictMode>,
)
