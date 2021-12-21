import React from 'react';
// import { useDispatch } from 'react-redux';

const SingleRocket = (props) => {
  // const dispatch = useDispatch();
  const {
    id,
    description,
    name,
    image,
  } = props;

  return (
    <div className="rocket-container" key={id}>
      <img src={image} alt="rocket" />

      <div className="rocket-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button"><span>Reserve Rocket</span></button>
      </div>
    </div>
  );
};

export default SingleRocket;
