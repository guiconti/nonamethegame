import API from './API';

export default async function gameMap() {
  const options = {
    method: 'GET'
  };
  return await API(`http://localhost:4000/v1/map/`, options);
}
