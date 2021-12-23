import axios from 'axios';
import { FETCH_MISSIONS } from '../actions/Actions';

const url = 'https://api.spacexdata.com/v3/missions';

const getMissions = () => async (dispatch) => {
  const result = await axios.get(url);
  const missions = result.data;
  const fetchedMissions = [];
  missions.forEach((mission) => {
    const id = mission.mission_id;
    const name = mission.mission_name;
    const desc = mission.description;
    const status = false;
    fetchedMissions.push({
      id, name, desc, status,
    });
  });
  dispatch({
    type: FETCH_MISSIONS,
    fetchedMissions,
  });
};

export default getMissions;
