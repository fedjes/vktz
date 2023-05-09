import React from "react";
import { Link } from "react-router-dom";
const UserPageHeader = () => {
    return (
        <nav className="navHeader">
            <ul>
                <li><Link to="/user">main</Link></li>
                <li>news</li>
                <li>music</li>
                <li><Link to='/login'>settings</Link></li>
            </ul>
        </nav>
    );

};

export default UserPageHeader;