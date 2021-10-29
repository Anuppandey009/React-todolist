import { useState } from "react";
import { nanoid } from "nanoid";

export const Todoinput = ({ handleAddTodo }) => {
  //we received handleAddTodo
  // function as the prop
  const [text, setText] = useState("");

  const handlechange = ({ target }) => {
    setText(target.value);
  };

  const handleClick = () => {
    const data = {
      id: nanoid(4),
      title: text,
      status: false
    };
    handleAddTodo(data); // we call the handleAddTodo function and pass the
    // update text and that will automaticlly gets added into the todolist
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the Todo"
        value={text}
        onChange={handlechange}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};
