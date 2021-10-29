//This todo list is only responsible to render the todo list
//Condition Rendering is added in this todo app
//We will also use the toggle feature in our Todo app

export const TodoList = ({ list, handleToggle }) => {
  return (
    <div>
      {list.map((e) => (
        <p key={e.id}>
          {e.title}-{e.status ? "Done" : "Not Done"}
          <button
            onClick={() => {
              handleToggle(e.id, e.title);
            }}
          >
            Change staus
          </button>
        </p>
      ))}
    </div>
  );
};
