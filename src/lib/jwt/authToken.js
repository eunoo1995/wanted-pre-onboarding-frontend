export const getAuthToken = () => {
  return localStorage.getItem('ACCESS_TOKEN');
};

export const setAuthToken = token => {
  localStorage.setItem('ACCESS_TOKEN', token);
};
