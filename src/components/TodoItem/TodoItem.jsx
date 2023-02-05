import style from './TodoItem.module.css';
import EmptyBoxIcon from '../../assets/box-empty.svg';
import FillBoxIcon from '../../assets/box-fill.svg';

export const TodoItem = ({
  value,
  checked,
  editValue,
  isEditMode,
  onEditMode,
  onChecked,
  onEditTodo,
  onSubmit,
  onDelete,
}) => {
  return (
    <li className={style.li}>
      {!isEditMode ? (
        <>
          <label className={style.label}>
            <img src={checked ? FillBoxIcon : EmptyBoxIcon} alt="" />
            <input
              type="checkbox"
              className="sr-only"
              checked={checked}
              onChange={onChecked}
            />
            <span>{value}</span>
          </label>
          <button data-testid="modify-button" onClick={onEditMode}>
            수정
          </button>
          <button data-testid="delete-button" onClick={onDelete}>
            삭제
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            data-testid="modify-input"
            className={style.input}
            autoComplete="off"
            value={editValue}
            onChange={onEditTodo}
          />
          <button data-testid="submit-button" onClick={onSubmit}>
            완료
          </button>
          <button data-testid="cancel-button" onClick={onEditMode}>
            취소
          </button>
        </>
      )}
    </li>
  );
};
