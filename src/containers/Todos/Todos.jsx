import { TodoForm, TodoList, Button } from '../../components';
import { useState, useCallback, useEffect } from 'react';
import { createTodo, getTodos } from '../../lib/api/todos';
import { removeAuthToken } from '../../lib/jwt/authToken';
import { useNavigate } from 'react-router-dom';

export const Todos = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };
    fetchTodos();
  }, []);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      if (!todoInput) return;
      try {
        const newTodo = await createTodo(todoInput);
        setTodos([newTodo, ...todos]);
        setTodoInput('');
      } catch (e) {
        console.log(e);
      }
    },
    [todoInput, todos]
  );

  const handleChange = useCallback(e => {
    setTodoInput(e.target.value);
  }, []);

  const handleSignOut = () => {
    removeAuthToken();
    navigate('/signin');
  };

  return (
    <>
      <TodoForm
        value={todoInput}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <TodoList todos={todos} setTodos={setTodos} />
      <Button content="로그아웃" onClick={handleSignOut} />
    </>
  );
};
