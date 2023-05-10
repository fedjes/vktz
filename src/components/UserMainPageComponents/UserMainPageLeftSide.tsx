import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';


const UserMainPageLeftSide = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [photo, setPhoto] = useState('');

    const userId = localStorage.getItem('userId');
    axios.get(`https://ancient-smoke-8603.fly.dev/users/${userId}`)
        .then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setPhoto(response.data.photo);
        })
        .catch((error) => {
            console.error(error);
        });

    return (
        <div className="userMainPageLeftSide">
            <img src={photo}/>
            <ul>
                <li>{firstName}</li>
                <li>{lastName}</li>
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