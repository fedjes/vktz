import React from "react";
import react, { useState } from "react";
import LoginPage from '../LoginPage';
import UserPage from '../UserPage';

const ShowFormOrUser: React.FC = () => {
    const [isAuthentificated, changeIsAuthentificated] = useState(false);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        changeIsAuthentificated(true);
    };
    
    return (
        !isAuthentificated ? <LoginPage /> : <UserPage />
    );
};

export default ShowFormOrUser;
