import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import {createHashRouter, RouterProvider,} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import OtherUser from './components/otherUser/OtherUser';
import ShowFormOrUser from './components/showFormOrUser/ShowFormOrUser';
import RandomUser from './components/RandomUser';
import Friends from './components/Friends';

const router = createHashRouter([
  {
    path: "/otherUser",
    element: <OtherUser/>
  },
  {
    path: "/user",
    element: <UserPage/>
  },
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/users/:userId",
    element: <RandomUser/>
  },
  {
    path: "/user/friends",
    element: <Friends/>
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

