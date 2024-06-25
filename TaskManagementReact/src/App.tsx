import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Dsrpagedata } from './Component/Pages/Dsrpagedata';
import Dashboard from './Component/Pages/Dashboard';
import Login from './Component/Pages/Login';
import Signup from './Component/Pages/Signup';
import Reports from './Component/Pages/Reports';
import { Profilepage } from './Component/Pages/Profilepage';
import Layout from './Component/Pages/Layout';
import { Calendar } from './Component/Pages/Calendar';
import { Task } from './Component/Pages/Task';
import { Myprojects } from './Component/Pages/Myprojects';
import { Users } from './Component/Pages/Users';


// import { PrivateRoute } from './Component/context/ProtectedRoute';
// import useAuth from './Component/context/AuthProvider';
// import Sidebar from './Component/Dashboard/Sidebar';

function App() {
  // const { user, loading } = useAuth();

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/Dashboard', element: <Dashboard /> },

        { path: '/Dsrpagedata', element: <Dsrpagedata /> },
        { path: '/Profilepage', element: <Profilepage /> },
        { path: '/Myprojects', element: <Myprojects /> },
        { path: '/Calender', element: <Calendar /> },
        { path: '/Mytasks', element: <Task /> },
        { path: '/Profile/:userId', element: <Profilepage /> },
        { path: '/Reports', element: <Reports /> },
        {
          path: '/Users', element: <Users />,
        },
        
        // { path: '/Profilepagedetail', element: <Reports /> },


      ],
    },
    { path: '/Login', element: <Login /> },
    { path: '/Signup', element: <Signup /> },
  ];

  return (
    <Routes>
      {routes.map(({ path, element, children }) => (
        <Route key={path} path={path} element={element}>
          {children && children.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;