import getRockets from './RocketAPI';

const GET_ROCKET = 'rocketStore / rockets / GET_ROCKET';
const ADD_RESERVARION = 'rocketStore / rockets / ADD_RESERVARION';

const initialState = [];

export const loadRocket = (payload) => ({
  type: GET_ROCKET,
  payload,
});

export const addReservation = (payload) => ({
  type: ADD_RESERVARION,
  payload,
});

export const loadRockets = () => (dispatch) => {
  getRockets().then((rockets) => {
    const rocketData = [];
    rockets.forEach((rocket) => {
      const rocketId = {};
      rocketId.id = rocket.rocket_id;
      rocketId.name = rocket.rocket_name;
      rocketId.description = rocket.description;
      rocketId.image = rocket.flickr_images;
      rocketId.reserved = false;
      rocketData.push(rocketId);
    });
    dispatch(loadRocket(rocketData));
  });
};

const reducer = (state = initialState, action) => {
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

export default reducer;
