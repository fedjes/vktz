import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const UserMainPageLeftSide = () => {
    const userId = localStorage.getItem('userId');
    axios.get(`https://ancient-smoke-8603.fly.dev/users/${userId}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
    return (
        <div className="userMainPageLeftSide">
            <img src="data:image/jpeg;base64,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" alt="avatarUser" />
            <ul>
                <li>firstName</li>
                <li>secondName</li>
                <li>age</li>
                <li>aducation</li>
                <li>Message</li>
                <li><Link to='/otherUser'>Friends</Link></li>
                <li>Posts</li>             
            </ul>
        </div>
    );
};

export default UserMainPageLeftSide;