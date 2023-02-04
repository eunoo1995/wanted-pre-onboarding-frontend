import axios from './axios';

export const createTodo = async todo => {
  const { data, status } = await axios.post('/todos', {
    todo,
  });
  return { data, status };
};

export const getTodos = async () => {
  const { data, status } = await axios.get('/todos');
  return { data, status };
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  const { data, status } = await axios.put(`/todos/${id}`, {
    todo,
    isCompleted,
  });
  return { data, status };
};

export const deleteTodo = async id => {
  const { status } = await axios.delete(`/todos/${id}`);
  return { status };
};
