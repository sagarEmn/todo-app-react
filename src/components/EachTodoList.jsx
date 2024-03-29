function EachTodoList({ id, completed, title, toggleTodo, deleteTodo}) {
  console.log()
  return (
    <>
      <li key={id}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
              toggleTodo(id, e.target.checked);
            }}
          />
          {title}
        </label>
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default EachTodoList;
