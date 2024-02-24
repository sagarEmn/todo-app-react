import { useState } from "react";

function Form({ setListedItem }) {
  // useState for current text typed in text input field
  const [typingItem, setTypingItem] = useState("");

  // Function for handling submit action of Form
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

  return (
    <>
      {/* Form for entering todo item */}
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

        {/* Submit button */}
        <button className="btn">Add</button>
      </form>
    </>
  );
}
export default Form;
