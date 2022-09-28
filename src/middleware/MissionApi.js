import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/';
const fetchMission = async () => {
  const getMissions = await axios.get(`${baseUrl}missions`);
  return getMissions.data;
};

export default fetchMission;
