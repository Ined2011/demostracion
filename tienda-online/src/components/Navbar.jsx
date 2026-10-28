import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  return (
    <nav style={{ background: "#2563eb", padding: "14px 24px", display: "flex", gap: 24 }}>
      <Link to="/" style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>TiendaOnline</Link>
      <span style={{ flex: 1 }} />
      <Link to="/login" style={{ color: "#fff" }}>Mi cuenta</Link>
      <Link to="/carrito" style={{ color: "#fff", fontWeight: "bold" }}>Carrito ({totalItems})</Link>
    </nav>
  );
}