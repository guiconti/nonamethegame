import API from './API';

export default async function connect() {
  const options = {
    method: 'POST'
  };
  return await API('http://localhost:4000/v1/game/connect', options);
}
