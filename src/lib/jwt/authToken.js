const getAuthToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
};

const setAuthToken = token => {
  localStorage.setItem('ACCESS_TOKEN', token);
};

export { getAuthToken, setAuthToken };
