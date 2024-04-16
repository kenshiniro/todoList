function Footer({ items }) {
  let completedItem = items.filter((item) => item.isChecked).length;
  return (
    <div className="footer">
      You have {items.length} items in your list, and you have already completed
      {completedItem}
      <p></p>
    </div>
  );
}

export default Footer;
