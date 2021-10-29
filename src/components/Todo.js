import { useState } from "react";
import { Todoinput } from "./Todoinput";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (todo) => {
    setTodoList([...todoList, todo]); //To add Todo in the todo list
  };

  const handleToggle = (id) => {
    //steps: find this id in the todo list
    //change status of the element
    //update todolist with new status

    //step1:  i am going to use map to ittirate over the todolist
    const updateList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    console.log(updateList);

    setTodoList(updateList);
  };
  return (
    <div>
      Todo App
      <Todoinput handleAddTodo={handleAddTodo} />
      <TodoList list={todoList} handleToggle={handleToggle} />
      <button
        onClick={() => {
          const updated = todoList.filter((e) => !e.status);
          setTodoList(updated);
        }}
      >
        Show not completed
      </button>
    </div> // In this stage we are sending handleAddTodo function in the
    //Todo input to get todos
  );
};
