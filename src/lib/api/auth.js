import axios from './axios';

export const signIn = async ({ userId, password }) => {
  const { data, status } = await axios.post('/auth/signin', {
    userId,
    password,
  });
  return { data, status };
};

export const signUp = async ({ userId, password }) => {
  const { data, status } = await axios.post('/auth/signup', {
    userId,
    password,
  });
  return { data, status };
};
