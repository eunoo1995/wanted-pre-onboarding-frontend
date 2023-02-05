import axios from './axios';

export const createTodo = async todo => {
  const { data } = await axios.post('/todos', {
    todo,
  });
  return data;
};

export const getTodos = async () => {
  const { data } = await axios.get('/todos');
  return data;
};

export const updateTodo = async ({ id, todo, isCompleted }) => {
  const { data } = await axios.put(`/todos/${id}`, {
    todo,
    isCompleted,
  });
  return data;
};

export const deleteTodo = async id => await axios.delete(`/todos/${id}`);
