import sareeImg from "../assets/saree.jpg";
const designers = [
  {
    name: "Designer 1",
    image: sareeImg
  },
  {
    name: "Designer 2",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b"
  },
  {
    name: "Designer 3",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae"
  }
];

export default function DesignerSection() {
  return (
    <div className="container">
      <h2>Designers In The Spotlight</h2>

      <div className="flex">
        {designers.map((d, i) => (
          <div key={i} className="card">
            <img src={d.image} />
            <p>{d.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}