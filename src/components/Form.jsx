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
        <label htmlFor="item" className="text-3xl text-center mb-4 mt-2">
          Enter a Todo Item:{" "}
        </label>
        <div className="typing-area form-row rounded-2xl p-1 pt-3 pb-3 justify-center items-center">
          <input
            className="text-box text-center rounded-lg w-full h-20"
            value={typingItem}
            type="text"
            id="item"
            onChange={(e) => {
              setTypingItem(e.target.value);
            }}
          />
            <button className="add-btn rounded-3xl font-bold mt-3 min-w-44">
              Add
            </button>

        </div>

        {/* Submit button */}
      </form>
    </>
  );
}
export default Form;
