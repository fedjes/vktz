import React from "react";
import UserPageHeader from "./UserComponents/UserPageHeader";
import UserMainPage from "./UserComponents/UserMainPage";
import UserFooterPage from "./UserComponents/UserFooterPage";
import axios from "axios";


function UserPage() {
    const userId = localStorage.getItem('userId');
    // console.log('local ', userId);

    axios.get(`https://ancient-smoke-8603.fly.dev/users/${userId}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    return (


        <div className="test">

            <UserPageHeader />
            <UserMainPage />
            <UserFooterPage />
        </div>
    );
};


export default UserPage;