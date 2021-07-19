import React, { useState, useEffect } from "react";
import Todo from "./Components/Todo/Todo";
import { Api } from "./utils/api.js";
import "./TodoApp.css";
import { formatList } from "./utils/listFormatter";
import { Dimmer, Loader } from "semantic-ui-react";

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [content, setContent] = useState(null);

  useEffect(() => {
    Api.getTodos().then((data) => {
      const formattedList = formatList(data);
      setTodoList(formattedList);
      setContent(1);
    });
  }, []);

  if (!content) {
    return (
      <div className="Loader">
        <Dimmer active inverted size="massive">
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    );
  } else {
    return (
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
    );
  }
}
