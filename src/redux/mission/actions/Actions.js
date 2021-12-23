export const FETCH_MISSIONS = 'FETCH_MISSIONS';
export const JOIN_MISSION = 'JOIN_MISSION';

export const joinMission = (payload) => ({
  type: 'JOIN_MISSION',
  payload,
});
