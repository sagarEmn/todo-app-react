import { useState, useEffect } from "react";
import "./index.css";

function App() {
  // setup a useState for form text field -
  // pass value to another useState
  // refresh the form text field
  const [typingItem, setTypingItem] = useState("");
  const [listedItem, setListedItem] = useState(() => {
    const localValue = localStorage.getItem("TodoItemfirst");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TodoItemfirst", JSON.stringify(listedItem));
  }, [listedItem]);

  function handleSubmit(e) {
    e.preventDefault();
    setListedItem((arrayListedItem) => {
      return [
        ...arrayListedItem,
        { id: crypto.randomUUID(), title: typingItem, completed: false },
      ];
    });
    setTypingItem(""); //emptying input field box
  }

  function toggleTodo(passedItemID, checkedStatus) {
    setListedItem((currentList) => {
      return currentList.map((eachListedItem) => {
        if (eachListedItem.id === passedItemID) {
          return { ...eachListedItem, checkedStatus };
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">Enter a Todo Item: </label>
          <input
            value={typingItem}
            type="text"
            id="item"
            onChange={(e) => {
              setTypingItem(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add</button>
      </form>

      {/* Header for List */}
      <h1 className="header">Todo List: </h1>
      <ul className="list">
        {listedItem.map((eachListedItem) => {
          return (
            <li key={eachListedItem.id}>
              <label>
                <input
                  type="checkbox"
                  checked={listedItem.completed}
                  onChange={(e) => {
                    toggleTodo(eachListedItem.id, e.target.checked);
                  }}
                />
              {eachListedItem.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  deleteTodo(eachListedItem.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
