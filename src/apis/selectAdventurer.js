import API from './API';

export default async function adventurerInfo(payload) {
  const options = {
    method: 'PATCH',
    body: JSON.stringify(payload)
  };
  const response = await API('http://localhost:4002/v1/adventurers/select', options);
  const data = await response.json();
  return data;
}
