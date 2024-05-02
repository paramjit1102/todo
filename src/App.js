import React, { useState, useEffect } from "react";
import Item from "./components/remove";

const App = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    // Fetch data from API
    const response = await fetch("http://localhost:5000/api/users");
    const data = await response.json();
    setItems(data.users);
  };

  const addItem = async () => {
    // Send POST request to your API to add an item
    await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: itemName }),
    });
    fetchItems();
    setItemName("");
  };

  const deleteItem = async (id) => {
    // Send DELETE request to your API to delete an item
    await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "DELETE",
    });
    fetchItems();
  };

  return (
    <div>
      <h1>Users</h1>
      <div className="content">
        <label>username</label>
        <input
          name="username"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={addItem} className="btn">
          Add user
        </button>
        <div className="table">
          <table>
            <th>Username</th>
            <th>Action</th>
            <tbody>
              {items.map((item) => (
                <Item key={item.id} item={item} onDelete={deleteItem} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
