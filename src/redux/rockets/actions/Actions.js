export const GET_ROCKET = 'rocketStore / rockets / GET_ROCKET';
export const ADD_RESERVARION = 'rocketStore / rockets / ADD_RESERVARION';

export const loadRocket = (payload) => ({
  type: GET_ROCKET,
  payload,
});

export const addReservation = (payload) => ({
  type: ADD_RESERVARION,
  payload,
});
