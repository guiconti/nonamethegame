import API from './API';

export default async function signIn(payload) {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
  };
  return await API('http://localhost:4001/v1/auth/sign_in', options);
}
