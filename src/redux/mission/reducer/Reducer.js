import { FETCH_MISSIONS, JOIN_MISSION } from '../actions/Actions';

const initialState = [];

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

export default missionReducer;
