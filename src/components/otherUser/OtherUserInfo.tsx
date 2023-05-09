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
                <img src="" alt="otherUserInfoImg" />
                <ul>
                    <li>aucation</li>
                    <li>age</li>
                    <li>id</li>
                    <li>name</li>
                </ul>
                <button>addFriend</button>
                <br />
                <button>removeFriend</button>
            </div>
            <div className="friendCard">
                <img src="" alt="otherUserInfoImg" />
                <ul>
                    <li>aucation</li>
                    <li>age</li>
                    <li>id</li>
                    <li>name</li>
                </ul>
                <button>addFriend</button>
                <br />
                <button>removeFriend</button>
            </div>
            <div className="friendCard">
                <img src="" alt="otherUserInfoImg" />
                <ul>
                    <li>aucation</li>
                    <li>age</li>
                    <li>id</li>
                    <li>name</li>
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