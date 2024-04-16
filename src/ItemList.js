import Item from "./Item";

// const groceryData = [
//   { id: 1, quantity: "1", name: "Milk" },
//   { id: 2, quantity: "2", name: "HotDog" },
//   { id: 3, quantity: "3", name: "Veggies" },
// ];

function ItemList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <div>
      {items.map((item) => (
        <Item
          itemList={item}
          key={item.id} // Use unique id as the key
          onDeleteItem={onDeleteItem}
          onCheckedItem={onCheckedItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
