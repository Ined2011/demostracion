import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Catalogo from "./pages/Catalogo";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalogo />} />
        {/* Las demás rutas las agregamos en el siguiente paso:
            /login, /carrito, /pago */}
      </Routes>
    </>
  );
}