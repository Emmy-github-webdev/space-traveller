import React from 'react';
import MyProfile from './MyProfile';
import Header from '../header/Header';
import './profile.css';

const Profile = () => (
  <div className="conatiner">
    <Header />
    <div className="profile-conatiner">
      <div className="profile-mission">
        <h2>My Missions</h2>
        <div className="mission-container">
          Mission
        </div>
      </div>
      <div className="profile-rocket">
        <h2>My Rockets</h2>
        <div className="rocket">
          <MyProfile />
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
