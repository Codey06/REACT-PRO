export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to your packing list </em>
      </p>

    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const parcentage = Math.round((numPacked / numItems) * 100);
  return <footer className="stats">
    <em>{parcentage === 100
      ? "You got everything! Ready to go ✈"
      : `💼 You Have ${numItems} items on Your list, and you already packed
      ${numPacked} (${parcentage}%)`}
    </em>
  </footer>;
}
