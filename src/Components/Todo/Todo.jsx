import React, { useState, useEffect } from "react";
import { Api } from "../../utils/api";
import "./Todo.css";

// eslint-disable-next-line react/prop-types
export default function Todo({ id, description, isComplete, dueDate }) {
  const [checked, setChecked] = useState(!!isComplete);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(1);
  }, []);

  // format date string in the same format as it is on the mockup

  let date = null;
  let formattedDate = null;
  if (dueDate !== null) {
    date = new Date(dueDate);
    formattedDate =
      date.getMonth().toString() +
      "/" +
      date.getDate().toString() +
      "/" +
      date.getFullYear().toString();
  }

  const handleChange = (event) => {
    const id = event.target.id.replace("todo-id", "");
    setChecked(event.target.checked);
    setContent(null);
    Api.updateTodo(id, { isComplete: event.target.checked }).then((data) => {
      setContent(1);
    });
  };

  if (!content) {
    return <div className="todo">loading...</div>;
  } else {
    return (
      <div className={isComplete ? "todo complete" : "todo overdue"}>
        <input
          className={"checkbox"}
          type="checkbox"
          id={"todo-id" + id}
          checked={checked}
          onChange={(event) => handleChange(event)}
        ></input>
        <span
          className={isComplete ? "description line-through" : "description"}
        >
          {description}
        </span>
        <span className={"due-date"}>{formattedDate}</span>
      </div>
    );
  }
}
