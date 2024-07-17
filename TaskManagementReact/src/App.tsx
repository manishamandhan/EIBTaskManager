import React from 'react';
import './App.css';
import { Routes, Route, RouteObject, useRoutes } from 'react-router-dom';
import { Dsrpagedata } from './Component/Pages/Dsrpagedata';
import Dashboard from './Component/Pages/Dashboard';

import Signup from './Component/Pages/Signup';
import { Profilepage } from './Component/Pages/Profilepage';
import Layout from './Component/Pages/Layout';
import { Calendar } from './Component/Pages/Calendar';
import { Task } from './Component/Pages/Task';
import { Project } from './Component/Pages/Project';
import { Users } from './Component/Pages/Users';
import { AddEditTask } from './Component/AddeditPages/AddEditTask';
import { LoginPage } from './Component/Pages/Login';
import useAuth from './Context/AuthProvider';
import { PrivateRoute } from './Context/ProtectedRoute';
import Reports from './Component/Pages/Reports';





function App() {
   const { user, loading  } = useAuth();

   const routes: RouteObject[] = [
    {
      
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute roles={['Admin']} currentUser={user ?? undefined} loading={loading}>
                <Task />
            </PrivateRoute>
          ),
        },

        // {
        //   path: "/Admin/Task",
        //   element: (
        //     <PrivateRoute role={['Admin']} currentUser={user} loading={loading}>
        //       <Task/>
        //     </PrivateRoute>
        //   ),
        // },
        { path: '/Dashboard/:ownerId', element: <Dashboard /> },

        { path: '/Dsrpagedata', element: <Dsrpagedata /> },
        { path: '/Profilepage', element: <Profilepage /> },
        { path: '/Myprojects', element: <Project /> },
        { path: '/Calender', element: <Calendar /> },
        //{ path: '/Task', element: <Task /> },
        { path: '/Profile/:userId', element: <Profilepage /> },
        { path: '/Reports', element: <Reports /> },
        {
          path: '/Users', element: <Users />,
        },
        { path: "/AddEditTask/:tasksId", element: <AddEditTask />},
        
        
        // { path: '/Profilepagedetail', element: <Reports /> },


      ],
    },
    { path: '/Login', element: <LoginPage /> },
    { path: '/Signup', element: <Signup /> },
  ];

  const content = useRoutes(routes);
  return content;
}
export default App;