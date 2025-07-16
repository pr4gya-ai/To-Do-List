import React from "react";

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div onClick={() => toggleTodo(index)} className="todo-text">
        <strong>{todo.text}</strong>
        <small>📅 {todo.createdAt}</small>
        <span className={`priority ${todo.priority.toLowerCase()}`}>
          {todo.priority}
        </span>
      </div>
      <button onClick={() => deleteTodo(index)}>❌</button>
    </div>
  );
}

export default TodoItem;
