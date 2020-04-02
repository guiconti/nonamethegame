export default async function signIn(payload) {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const response = await fetch('http://localhost:4001/v1/auth/sign_in', options);
  const data = await response.json();
  return data;
}
