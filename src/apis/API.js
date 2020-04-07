const defaultOptions = {
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
};

export default async (url, options) => {
  const response = await fetch(url, { ...defaultOptions, ...options });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.data);
  }
  return data;
};