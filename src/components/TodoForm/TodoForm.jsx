import style from './TodoForm.module.css';

export const TodoForm = ({ onSubmit, onChange, value }) => {
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        type="text"
        data-testid="new-todo-input"
        className={style.input}
        autoComplete="off"
        onChange={onChange}
        value={value}
      />
      <button
        type="submit"
        data-testid="new-todo-add-button"
        className={style.button}>
        추가
      </button>
    </form>
  );
};
