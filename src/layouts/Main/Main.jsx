import { Outlet } from 'react-router-dom';
import style from './Main.module.css';

export const Main = () => {
  return (
    <main className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>TODOS</h1>
        <Outlet />
      </div>
    </main>
  );
};
