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
            key={eachListedItem.id}
            completed={eachListedItem.completed}
            title={eachListedItem.title}
            toggleTodo={eachListedItem.toggleTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;