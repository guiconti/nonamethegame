import API from './API';

export default async function gameMap() {
  const options = {
    method: 'GET'
  };
  const response = await API(`http://localhost:4000/v1/map/`, options);
  const data = await response.json();
  return data;
}
