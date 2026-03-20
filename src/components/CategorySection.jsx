import "./CategorySection.css";

const categories = [
  { name: "Kurta Sets", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0" },
  { name: "Lehengas", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990" },
  { name: "Sarees", img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c" },
  { name: "Dresses", img: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
  { name: "Anarkalis", img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0" },
  { name: "Kaftans", img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf" }
];

export default function CategorySection() {
  return (
    <div className="category-list">
  {categories.map((item, index) => (
    <div className="category-item" key={index}>
      
      <div className="category-card">
        <img src={item.img} alt={item.name} />
      </div>

      <p className="category-name">{item.name}</p>

    </div>
  ))}
</div>
  );
}