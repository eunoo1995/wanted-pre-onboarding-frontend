import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import style from './Main.module.css';
import { useEffect } from 'react';

export const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') navigate('/signin');
  }, []);

  return (
    <main className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>TODOS</h1>
        <Outlet />
      </div>
    </main>
  );
};
