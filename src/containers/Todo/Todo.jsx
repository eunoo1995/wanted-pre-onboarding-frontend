import { TodoItem } from '../../components';
import { useState, useCallback } from 'react';
import { updateTodo, deleteTodo } from '../../lib/api/todos';

export const Todo = ({ todo, setTodos }) => {
  const [isEditMode, setIsEditmode] = useState(false);
  const [editedValue, setEditedValue] = useState();

  const handleEditMode = useCallback(() => {
    setIsEditmode(!isEditMode);
    setEditedValue(todo.todo);
  }, [isEditMode, todo.todo]);

  const handleChecked = useCallback(async () => {
    try {
      const updatedTodo = await updateTodo({
        ...todo,
        isCompleted: !todo.isCompleted,
      });
      setTodos(prevTodos =>
        prevTodos.map(prevTodo =>
          prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo
        )
      );
    } catch (e) {
      console.log(e);
    }
  }, [setTodos, todo]);

  const handleEditTodo = useCallback(e => {
    setEditedValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (todo.todo === editedValue) return setIsEditmode(false);

    try {
      const updatedTodo = await updateTodo({
        ...todo,
        todo: editedValue,
      });
      setTodos(prevTodos =>
        prevTodos.map(prevTodo =>
          prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo
        )
      );
      setIsEditmode(false);
    } catch (e) {
      console.log(e);
    }
  }, [todo, editedValue, setTodos]);

  const handleDelete = useCallback(async () => {
    await deleteTodo(todo.id);
    setTodos(prevTodos =>
      prevTodos.filter(prevTodo => prevTodo.id !== todo.id)
    );
  }, [setTodos, todo.id]);

  return (
    <TodoItem
      value={todo.todo}
      checked={todo.isCompleted}
      editValue={editedValue}
      isEditMode={isEditMode}
      onEditMode={handleEditMode}
      onChecked={handleChecked}
      onEditTodo={handleEditTodo}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
    />
  );
};
