import { Todos } from '../containers';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../lib/jwt/authToken';

export const TodoPage = () => {
  const navigate = useNavigate();
  const token = getAuthToken();

  useEffect(() => {
    if (!token) navigate('/signin');
  });

  return (
    <>
      <Todos />
    </>
  );
};
