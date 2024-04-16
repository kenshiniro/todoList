import { useState } from "react";

function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = { name, quantity, isChecked: false, id: Date.now };
    console.log(newItem);
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="center">
        <select onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, n) => n + 1).map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Order</button>
      </form>
    </div>
  );
}

export default Form;
