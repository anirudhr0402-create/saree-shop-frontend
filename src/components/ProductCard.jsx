export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.imageUrl} />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
    </div>
  );
}