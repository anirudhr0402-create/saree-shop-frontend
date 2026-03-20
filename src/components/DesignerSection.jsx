import "./DesignerSection.css";

const designers = [
  { img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c" },
  { img: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
  { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" }
];

export default function DesignerSection() {
  return (
    <div className="designer-container">
      <h2>Designers In The Spotlight</h2>

      <div className="designer-list">
        {designers.map((item, index) => (
          <div className="designer-card" key={index}>
            <img src={item.img} alt="designer" />
          </div>
        ))}
      </div>
    </div>
  );
}