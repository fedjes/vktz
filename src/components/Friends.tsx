import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Friends = () => {
    const LSID = localStorage.getItem('userId');
    const { userId } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [photo, setPhoto] = useState('');
    const [friends, changeFriends] = useState<any>([]);
    useEffect(() => {
        axios
          .get(`https://ancient-smoke-8603.fly.dev/users/${LSID}/friends`)
          .then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setPhoto(response.data.photo);
            changeFriends(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [LSID]);
return (
<div className="friendsWrapper">
      {friends.map(item => {
        return (
          <div key={item.id}>
            <ul>
              <img src={item.photo} alt="ph" />
              <li>{item.firstName}</li>
              <li>{item.lastName}</li>
            </ul>
          </div>
        )
      })}
    </div>
);
};

export default Friends;