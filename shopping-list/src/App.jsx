import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  // adding a new item with the current date and time
  const addItem = () => {
    if (item.trim() === "") return;

    const newItem = {
      id: Date.now(), //  current timestamp
      text: item,
      date: new Date().toLocaleString() // date string
    };

    setList([...list, newItem]);
    setItem(""); // Clear input field after adding
  };

  // Function to delete an item by filtering it out from the list
  const deleteItem = (id) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter item..."
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul>
        {list.map(item => (
          <li key={item.id} className="list-item">
            <div>
              <span className="item-text">{item.text}</span>
              <span className="item-date">{item.date}</span>
            </div>
            <button onClick={() => deleteItem(item.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
