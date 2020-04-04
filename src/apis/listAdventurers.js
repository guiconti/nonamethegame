import API from  './API';

export default async function listAdventurers() {
  const options = {
    method: 'GET',
  };
  const response = await API('http://localhost:4002/v1/adventurers', options);
  const data = await response.json();
  return data;
}
