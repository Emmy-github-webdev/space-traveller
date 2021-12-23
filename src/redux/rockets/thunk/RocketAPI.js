import { loadRocket } from '../actions/Actions';

const API = 'https://api.spacexdata.com/v3/rockets';
const getRockets = async () => {
  const rocketData = await fetch(API);
  const data = await rocketData.json();
  return data;
};

const loadRockets = () => (dispatch) => {
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

export default loadRockets;
