// src/UserCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserCard.css"; 

const UserCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=3&seed=abc" 
        );
        setUsers(response.data.results);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-cards">
      {users.map((user, index) => (
        <div key={index} className="card">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
          <div className="info">
            <div className="user-info">
              <h2>{`${user.name.first} ${user.name.last}`}</h2>
              <p>Gender: {user.gender}</p>
              <p>Phone Number: {user.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
