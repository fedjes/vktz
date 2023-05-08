import React from "react";
import UserMainPageLeftSide from "../UserMainPageComponents/UserMainPageLeftSide";
import UserMainPAgeRightSide from "../UserMainPageComponents/UserMainPAgeRightSide";


const UserMainPage = () => {
    return (
        <div className="mainPagesWrapper">
            <UserMainPageLeftSide />
            <UserMainPAgeRightSide />
        </div>
    );

};

export default UserMainPage;