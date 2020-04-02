export default async function register(payload) {
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    },
  };
  const response = await fetch('http://localhost:4001/v1/auth/register', options);
  const data = await response.json();
  return data;
}
