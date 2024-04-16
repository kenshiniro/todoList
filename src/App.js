import "./App.css";
import Header from "./Header";
import ItemList from "./ItemList";
import Form from "./Form";
import Item from "./Item";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  function handleClearList(id) {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div>
      <Header />
      <Form onAddItem={handleAddItem} />
      <ItemList
        items={sortedItems}
        onDeleteItem={handleDeleteItem}
        onCheckedItem={handleCheckedItems}
      />
      <button onClick={handleClearList}>Clear</button>
      <br />
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input</option>
        <option value="name">Sort by name</option>
        <option value="checked">Sort by check status order</option>{" "}
      </select>
      <Footer items={items} />
    </div>
  );
}

export default App;
