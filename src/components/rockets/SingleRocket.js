import React from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/rockets/Rockets';

const SingleRocket = (props) => {
  const dispatch = useDispatch();
  const {
    id,
    description,
    name,
    image,
    reserved,
  } = props;

  const reservationHandler = (id) => {
    dispatch(addReservation(id));
  };

  return (
    <div className="rocket-container" key={id}>
      <img src={image} alt="rocket" />

      <div className="rocket-info">
        <h2>{name}</h2>
        <p>
          {reserved ? <span className="reserved-button">Reserved</span> : ''}
          {description}
        </p>
        {reserved ? <button type="button" onClick={() => reservationHandler(id)}>Cancel Reservation</button> : <button type="button" onClick={() => reservationHandler(id)}>Reserve Rocket</button>}
      </div>
    </div>
  );
};

export default SingleRocket;
