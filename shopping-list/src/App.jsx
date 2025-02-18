import React, { useState } from 'react';

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  // adding a new item 
  const addItem = () => {
    if (item.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: item,
      date: new Date().toLocaleString() 
    };

    setList([...list, newItem]);
    setItem(""); // Clearing input field after adding
  };

  // deleting an item 
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
