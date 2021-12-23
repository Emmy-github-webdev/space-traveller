import { GET_ROCKET, ADD_RESERVARION } from '../actions/Actions';

const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return action.payload;

    case ADD_RESERVARION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        rocket.reserved = !rocket.reserved;
        return rocket;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default rocketReducer;
