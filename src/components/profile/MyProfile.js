import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const myProfile = useSelector((state) => state.rockets);
  let reservation;

  if (myProfile.length) {
    reservation = myProfile.filter((rocket) => {
      if (rocket.reserved === true) {
        return rocket;
      }
      return null;
    });
  } else {
    reservation = false;
  }
  return (
    <div className="myProfile-container">
      {reservation
        && (
        <div>
          {reservation.length ? reservation.map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))
            : <li>No rocket reservation found!</li>}
        </div>
        )}
    </div>
  );
};

export default MyProfile;
