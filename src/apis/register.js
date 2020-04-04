import API from './API';

export default async function register(payload) {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
  };
  const response = await API('http://localhost:4001/v1/auth/register', options);
  const data = await response.json();
  return data;
}
