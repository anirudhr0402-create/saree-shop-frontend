import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        Nari<span>Saree</span>
      </div>

      <div className="menu">
        <span>Women</span>
        <span>Kids</span>
        <span>Accessories</span>
        <span>Sale</span>
      </div>
    </div>
  );
}