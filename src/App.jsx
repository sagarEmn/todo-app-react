import { useState, useEffect } from "react";
import "./index.css";
import Form from "./components/Form"
import TodoList from "./components/TodoList";
function App() {
  const [listedItem, setListedItem] = useState(() => {
    const localValue = localStorage.getItem("TodoItemfirst");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TodoItemfirst", JSON.stringify(listedItem));
  }, [listedItem]);

  function toggleTodo(passedItemID, checked) {
    console.log(passedItemID);
    console.log(checked);
    
    setListedItem((currentList) => {
      return currentList.map((eachListedItem) => {
        if (eachListedItem.id === passedItemID) {
          return { ...eachListedItem, completed: checked };
        }
        return eachListedItem;
      });
    });
  }

  function deleteTodo(passedItemID) {
    setListedItem((currentList) => {
      return currentList.filter(
        (eachListedItem) => eachListedItem.id !== passedItemID
      );
    });
  }

  return (
    <>
      <Form setListedItem={setListedItem} />

     <TodoList listedItem={listedItem} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
