import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import OtherUser from './components/otherUser/OtherUser';
import ShowFormOrUser from './components/showFormOrUser/ShowFormOrUser';



const router = createBrowserRouter([
  {
    path: "/otherUser",
    element: <OtherUser/>
  },
  {
    path: "/user",
    element: <UserPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
])

const App = () => {
  
  // <LoginPage/>
  return (
    <RouterProvider router={router} />
    
    
    // <ShowFormOrUser />
    // <UserPage />
  //  <OtherUser />
  );
}

export default App;

