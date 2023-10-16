import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";


export default function TodoList() {
  const todosData = useSelector((state) => state.todos);
  const allId = todosData.allId;
  const todos = allId.map((id) => ({ id, detail: todosData.byIds[id] }));

  return (
    <ul>
      {todos && todos.length
        ? todos.map((todo) => (
            <li key={todo.id}>
              <Todo todo = {todo.detail} id ={todo.id}/>
            </li>
          ))
        : "Không có công việc nào hôm nay"}
    </ul>
  );
}
