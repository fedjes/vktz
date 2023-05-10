import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const RandomUser = () => {
    const LSID = localStorage.getItem('userId');
    const { userId } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [photo, setPhoto] = useState('');
    useEffect(() => {
        axios
          .get(`https://ancient-smoke-8603.fly.dev/users/${userId}`)
          .then((response) => {
            // setFirstName(response.data.firstName);
            // setLastName(response.data.lastName);
            // setPhoto(response.data.photo);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [userId]);
      
    return (
        <div className="randomUser">
            <img src={photo} alt="randomUser" />
            <ul>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>age</li>
            </ul>
            <button>follow</button>
            <button>unfollow</button>
        </div>
    );
}

export default RandomUser;