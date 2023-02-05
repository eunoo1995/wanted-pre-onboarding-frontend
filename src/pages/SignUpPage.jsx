import { SignUpForm } from '../containers';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../lib/jwt/authToken';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const token = getAuthToken();

  useEffect(() => {
    if (token) navigate('/todo');
  });

  return <>{!token && <SignUpForm />}</>;
};
