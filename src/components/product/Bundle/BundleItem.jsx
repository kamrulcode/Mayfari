function BundleItem({ item, toggle }) {
  return (
    <div className="bundle-item">
      <button
        className={item.selected ? "check active" : "check"}
        onClick={() => toggle(item.id)}
      >
        ✓
      </button>

      <img src={item.image} alt={item.title} />

      <div>
        <h4>{item.title}</h4>

        <p>${item.price}</p>
      </div>
    </div>
  );
}

export default BundleItem;
