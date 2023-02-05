import style from './Button.module.css';

export const Button = ({ content, onClick, isValid }) => {
  return (
    <button className={style.button} onClick={onClick} disabled={!isValid}>
      {content}
    </button>
  );
};
