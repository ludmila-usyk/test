import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="Todo">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList">
        <p className="TodoList-text">{text}</p>
        <button onClick={() => onDeleteTodo(id)} className="TodoList-button">Удалить</button>
      </li>
    ))}
  </ul>
);

export default TodoList;