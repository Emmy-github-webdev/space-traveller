import getRockets from './RocketAPI';

const GET_ROCKET = 'rocketStore / rockets / GET_ROCKET';

const initialState = [];

export const loadRocket = (payload) => ({
  type: GET_ROCKET,
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
      // rocketId.reserved = false;
      rocketData.push(rocketId);
    });
    dispatch(loadRocket(rocketData));
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKET:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
