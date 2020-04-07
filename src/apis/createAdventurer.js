import API from './API';

export default async function createAdventurer(payload) {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload)
  };
  return await API('http://localhost:4002/v1/adventurers/', options);
}
