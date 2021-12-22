/* eslint-disable no-fallthrough */
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

const FETCH_MISSIONS = 'FETCH_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...action.fetchedMissions];
    case JOIN_MISSION:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, status: !mission.status }
        : mission));

    default:
      return state;
  }
};
export const joinMission = (payload) => ({
  type: 'JOIN_MISSION',
  payload,
});

export const getMissions = () => async (dispatch) => {
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

export default missionReducer;
