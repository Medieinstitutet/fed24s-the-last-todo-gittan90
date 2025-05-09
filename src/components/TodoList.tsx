import { useState } from 'react';
import '../App.css';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      title: newTask.trim(),
      completed: false
    };

    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  const markAsDone = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <div className="todo-list">
      <h2>Mina To-Do's</h2>

      <input
        type="text"
        placeholder="Ny To-Do"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-button"
      onClick={addTask}>Lägg till</button>

      <ul>
        {todos
          .filter(todo => !todo.completed)
          .map(todo => (
            <li key={todo.id}>
              {todo.title}
              <button className="done-button"
              onClick={() => markAsDone(todo.id)}>Klar</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
