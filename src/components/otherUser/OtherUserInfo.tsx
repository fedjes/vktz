import React from "react";
import UserMainPageLeftSide from "../UserMainPageComponents/UserMainPageLeftSide";
import UserPageHeader from "../UserComponents/UserPageHeader";
import UserFooterPage from "../UserComponents/UserFooterPage";
const OtherUserInfo = () => {
    return (
        <div className="otherUserInfo">
            <UserPageHeader />
            <UserMainPageLeftSide />
            <div className="friendCard">
            <img src="" alt="otherUserInfoImg"/>
            <ul>
                <li>name</li>
                <li>Secondname</li>
                <li>age</li>
                <li>aducation</li>
            </ul>
            <button>addFriend</button>
            <br />
            <button>removeFriend</button>
            </div>
            <div className="friendCard">
            <img src="" alt="otherUserInfoImg"/>
            <ul>
                <li>name</li>
                <li>Secondname</li>
                <li>age</li>
                <li>aducation</li>
            </ul>
            <button>addFriend</button>
            <br />
            <button>removeFriend</button>
            </div>
            <div className="friendCard">
            <img src="" alt="otherUserInfoImg"/>
            <ul>
                <li>name</li>
                <li>Secondname</li>
                <li>age</li>
                <li>aducation</li>
            </ul>
            <button>addFriend</button>
            <br />
            <button>removeFriend</button>
            </div>
            <UserFooterPage />
        </div>
    );
};

export default OtherUserInfo;