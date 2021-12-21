import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleRocket from './SingleRocket';
import { loadRockets } from '../../redux/rockets/Rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(loadRockets());
    }
  }, []);

  return (
    <div className="rockts-container">
      {rockets.map((rocket) => (
        <SingleRocket
          id={rocket.id}
          key={rocket.id}
          image={rocket.image[0]}
          name={rocket.name}
          description={rocket.description}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default Rockets;
