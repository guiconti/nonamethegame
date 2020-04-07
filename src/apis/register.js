import API from './API';

export default async function register(payload) {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
  };
  return await API('http://localhost:4001/v1/auth/register', options);
}
