import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className='todo'>
      <p
        className='todo_text'
        style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
        <div className='todo_buttons'>
          <svg
            aria-hidden='true'
            data-prefix='fas'
            data-icon='check'
            class='svg-inline--fa fa-check fa-w-16 check'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'>
            {todo.isCompleted && (
              <path
                fill='green'
                d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
              />
            )}
          </svg>

          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
        {todo.text}
      </p>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        placeholder='Новая задача'
        value={value}
        onChange={e => setValue(e.target.value)}
        autoFocus
      />
      <button className='addButton'>Add</button>
    </form>
  );
}

function App() {
  let [todos, setTodos] = useState([
    {
      text: "Сделать тудушку",
      isCompleted: false
    },
    {
      text: "Залить в репу на гит",
      isCompleted: false
    },
    {
      text: "Добавить ссылку в доку",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];

    newTodos[index].isCompleted !== true
      ? (newTodos[index].isCompleted = true)
      : (newTodos[index].isCompleted = false);

    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        <TodoForm addTodo={addTodo} />

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
