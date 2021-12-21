const API = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => {
  const rocketData = await fetch(API);
  const data = await rocketData.json();
  return data;
};
export default getRockets;
