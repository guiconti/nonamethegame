import API from './API';

export default async function adventurerInfo(payload) {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(payload)
  };
  return await API('http://localhost:4002/v1/adventurers/select', options);
}
