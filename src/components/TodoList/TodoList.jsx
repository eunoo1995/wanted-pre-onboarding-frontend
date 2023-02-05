import { Todo } from '../../containers';
import style from './TodoList.module.css';

export const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className={style.list}>
      {todos && todos.length > 0 ? (
        todos.map(todo => (
          <Todo key={todo.id} todo={todo} setTodos={setTodos} />
        ))
      ) : (
        <li className={style.empty}>할 일 없음</li>
      )}
    </ul>
  );
};
