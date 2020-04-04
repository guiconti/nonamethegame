import API from './API';

export default async function adventurerInfo() {
  const options = {
    method: 'GET'
  };
  const response = await API(`http://localhost:4002/v1/adventurer/selected`, options);
  const data = await response.json();
  return data;
}
