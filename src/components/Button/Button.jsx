import style from './Button.module.css';

export const Button = ({
  content,
  onClick,
  isValid = true,
  className,
  ...props
}) => {
  return (
    <button
      className={style.button + ` ${className}`}
      onClick={onClick}
      disabled={!isValid}
      {...props}>
      {content}
    </button>
  );
};
