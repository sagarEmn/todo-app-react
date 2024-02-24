import EachTodoList from "./EachTodoList";

function TodoList({ listedItem, toggleTodo, deleteTodo }) {
  return (
    <>
     
      <div id="listing flex flex-column justify-center">
        
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
        </div>
        {/* Header for List */}
    </>
  );
}

export default TodoList;