import React from "react";
import UserPageHeader from "./UserComponents/UserPageHeader";
import UserMainPage from "./UserComponents/UserMainPage";
import UserFooterPage from "./UserComponents/UserFooterPage";

function UserPage () {


    return (
        <div>
            <UserPageHeader />
            <UserMainPage />
            <UserFooterPage />
        </div>
    );
};


export default UserPage;