import API from './API';

export default async function adventurerInfo(id) {
  const options = {
    method: 'GET'
  };
  const response = await API(`http://localhost:4002/v1/adventurers/${id}`, options);
  const data = await response.json();
  return data;
}
