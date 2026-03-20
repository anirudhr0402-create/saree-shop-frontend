import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(category)
      .then((res) => setProducts(res.data))
      .catch(() => {
        // fallback dummy data if backend not ready
        setProducts([
          {
            name: "Sample Saree",
            price: 2500,
            imageUrl:
              "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
          }
        ]);
      });
  }, [category]);

  return (
    <div className="container">
      <h2>{category}</h2>

      <div className="flex">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
}