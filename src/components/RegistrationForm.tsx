import React, {useState} from "react";
import react, {FormEventHandler} from "react";

const RegistrationForm = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const handleSubmit: FormEventHandler = (event) => { 
    event.preventDefault(); 
  };

return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
