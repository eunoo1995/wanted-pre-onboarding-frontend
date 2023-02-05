import { Routes, Route } from 'react-router-dom';
import { SignInPage, SignUpPage, TodoPage } from './pages';
import { Main } from './layouts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
