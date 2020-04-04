import API from './API';

export default async function createAdventurer(payload) {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload)
  };
  const response = await API('http://localhost:4002/v1/adventurers/', options);
  const data = await response.json();
  return data;
}
