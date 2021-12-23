import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadRockets from '../../redux/rockets/thunk/RocketAPI';
import SingleRocket from './SingleRocket';
import Header from '../header/Header';
import './rocket.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(loadRockets());
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="rockets-container">
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
    </div>
  );
};

export default Rockets;
