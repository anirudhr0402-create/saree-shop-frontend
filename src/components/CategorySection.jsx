import { useNavigate } from "react-router-dom";
import sareeImg from "../assets/saree.jpg";

const categories = [
  {
    name: "Kurta Sets",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c"
  },
  {
    name: "Lehengas",
    image: "https://images.unsplash.com/photo-1622122201714-77da0ca8e5d2"
  },
  {
    name: "Sarees",
    image: sareeImg
  },
  {
    name: "Dresses",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
  },
  {
    name: "Anarkalis",
    image: "https://images.unsplash.com/photo-1623091410901-00e2d268901f"
  },
  {
    name: "Kaftans",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  }
];

export default function CategorySection() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Shop By Category</h2>

      <div className="flex">
        {categories.map((cat, index) => (
          <div key={index} onClick={() => navigate(`/products/${cat.name}`)}>
            <img src={cat.image} className="circle-img" />
            <p style={{ textAlign: "center" }}>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}