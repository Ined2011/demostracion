import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Catalogo from "./pages/Catalogo";
import Login from "./components/Login"; // Asegúrate de que la ruta del archivo sea correcta

// Componentes temporales para evitar errores de compilación mientras los creas:
const Carrito = () => <div style={{ padding: "40px" }}><h2>Tu Carrito de Compras</h2><p>Aquí se listarán tus productos seleccionados.</p></div>;
const Pago = () => <div style={{ padding: "40px" }}><h2>Procesar Pago</h2><p>Formulario de pasarela de pago.</p></div>;

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Ruta principal: Catálogo de productos */}
        <Route path="/" element={<Catalogo />} />
        
        {/* Ruta de Inicio de Sesión */}
        <Route path="/login" element={<Login />} />
        
        {/* Ruta del Carrito de Compras */}
        <Route path="/carrito" element={<Carrito />} />
        
        {/* Ruta de la Pasarela de Pago */}
        <Route path="/pago" element={<Pago />} />
      </Routes>
    </>
  );
}
