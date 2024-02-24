import EachTodoList from "./EachTodoList";

function TodoList({ listedItem, toggleTodo, deleteTodo }) {
  return (
    <>
     

      {/* Header for List */}
      <h1 className="header">Todo List: </h1>
      <ul className="list">
        {listedItem.map((eachListedItem) => {
          return (
            <EachTodoList 
            {...eachListedItem}
            key={eachListedItem.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;