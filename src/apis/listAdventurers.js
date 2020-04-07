import API from  './API';

export default async function listAdventurers() {
  const options = {
    method: 'GET',
  };
  return await API('http://localhost:4002/v1/adventurers', options);
}
