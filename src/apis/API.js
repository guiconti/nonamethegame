const defaultOptions = {
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
};

export default (url, options) => fetch(url, { ...defaultOptions, ...options });