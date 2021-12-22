import React from 'react';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const myMissions = useSelector((state) => state.missionReducer);
  let missions;

  if (myMissions.length) {
    missions = myMissions.filter((mission) => {
      if (mission.status === true) {
        return mission;
      }
      return null;
    });
  } else {
    missions = false;
  }
  return (
    <div className="myProfile-container">
      {missions
          && (
          <div>
            {missions.length ? missions.map((mission) => (
              <li key={mission.id}>
                {mission.name}
              </li>
            ))
              : <li>No missions found!</li>}
          </div>
          )}
    </div>
  );
};

export default MyMissions;
