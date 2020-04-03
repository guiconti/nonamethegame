export default async function listAdventurers() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
  };
  const response = await fetch('http://localhost:4002/v1/adventurers', options);
  const data = await response.json();
  return data;
}
