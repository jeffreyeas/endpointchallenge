import React, { useState, useEffect } from "react";
import Todo from "./Components/Todo/Todo";
import { Api } from "./utils/api.js";
import "./TodoApp.css";
import { formatList } from "./utils/listFormatter";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const { promiseInProgress } = usePromiseTracker({ delay: 500 });
  useEffect(() => {
    trackPromise(
      Api.getTodos().then((data) => {
        const formattedList = formatList(data);
        setTodoList(formattedList);
      })
    );
  }, []);

  return (
    <>
      <div className="container">
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            isComplete={todo.isComplete}
            description={todo.description}
            dueDate={todo.dueDate}
            key={todo.id}
          ></Todo>
        ))}
      </div>
      <p>{promiseInProgress ? "loading" : ""}</p>
    </>
  );
}
