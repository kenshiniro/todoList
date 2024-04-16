function Item({ itemList, onDeleteItem, onCheckedItem }) {
  return (
    <div class="wrapbox">
      <h2 className="center">{itemList.quantity + " " + itemList.name} </h2>
      <span className="button-wrapper">
        <button onClick={() => onCheckedItem(itemList.id)}>✔</button>
        <button onClick={() => onDeleteItem(itemList.id)}>🗑️</button>
      </span>
    </div>
  );
}

export default Item;
