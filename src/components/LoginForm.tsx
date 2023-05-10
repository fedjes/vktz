import React, { useState, useEffect } from 'react';
import react, { FormEventHandler } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import UserPage from './UserPage';
import { render } from '@testing-library/react';
import { Route, redirect } from "react-router-dom";

const LoginForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit: FormEventHandler = (event) => { 
    event.preventDefault(); 
    axios.post("https://ancient-smoke-8603.fly.dev/login", {login, password})
    .then((response) => {
     let localStorageId = response.data.id;
     localStorage.setItem('userId', localStorageId);
      // console.log(response.data);
      history('/user');
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button id='loginSubmit' type="submit">Login</button>
    </form>
  );
};

export default LoginForm;