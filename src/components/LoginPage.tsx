import React from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";



const LoginPage = () => {
    return (
      <div className="loginPage">
        <h2>Login</h2>
        <LoginForm />
        <h2>Register</h2>
        <RegistrationForm />
      </div>
    );
  };
  
  export default LoginPage;