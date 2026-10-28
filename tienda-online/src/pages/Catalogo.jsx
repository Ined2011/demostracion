import { useState } from "react";
import { productos, formatoCOP } from "../data/productos";
import { useCart } from "../context/CartContext";

const categorias = ["Ropa", "Calzado", "Accesorios", "Tecnología"];

export default function Catalogo() {
  const { agregar } = useCart();
  const [busqueda, setBusqueda] = useState("");
  const [cats, setCats] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [orden, setOrden] = useState("");
  const [aviso, setAviso] = useState("");

  const toggleCat = (c) =>
    setCats((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));

  const rangoInvalido = min !== "" && max !== "" && Number(min) > Number(max);

  let lista = productos.filter((p) => {
    const okBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const okCat = cats.length === 0 || cats.includes(p.categoria);
    const okMin = rangoInvalido || min === "" || p.precio >= Number(min);
    const okMax = rangoInvalido || max === "" || p.precio <= Number(max);
    return okBusqueda && okCat && okMin && okMax;
  });
  if (orden === "menor") lista = [...lista].sort((a, b) => a.precio - b.precio);
  if (orden === "mayor") lista = [...lista].sort((a, b) => b.precio - a.precio);

  const handleAgregar = (p) => {
    agregar(p);
    setAviso("Producto agregado al carrito");
    setTimeout(() => setAviso(""), 2000);
  };

  return (
    <div style={{ display: "flex", gap: 24, padding: 24 }}>
      <aside style={{ width: 200 }}>
        <h3>Filtros</h3>
        <input placeholder="Buscar productos…" value={busqueda}
               onChange={(e) => setBusqueda(e.target.value)} />
        <h4>Categoría</h4>
        {categorias.map((c) => (
          <label key={c} style={{ display: "block" }}>
            <input type="checkbox" checked={cats.includes(c)} onChange={() => toggleCat(c)} /> {c}
          </label>
        ))}
        <h4>Precio</h4>
        <input type="number" placeholder="$ min" value={min} onChange={(e) => setMin(e.target.value)} />
        <input type="number" placeholder="$ max" value={max} onChange={(e) => setMax(e.target.value)} />
        {rangoInvalido && (
          <p style={{ color: "crimson" }}>El precio mínimo no puede ser mayor que el máximo</p>
        )}
      </aside>

      <main style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Resultados ({lista.length} productos)</h2>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="">Ordenar</option>
            <option value="menor">Menor precio</option>
            <option value="mayor">Mayor precio</option>
          </select>
        </div>
        {aviso && <p style={{ color: "green" }}>{aviso}</p>}
        {lista.length === 0 && <p>No se encontraron productos para su búsqueda</p>}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {lista.map((p) => (
            <div key={p.id} style={{ border: "1px solid #ccc", borderRadius: 8, padding: 12 }}>
              <div style={{ background: "#eee", height: 100 }} />
              <h4>{p.nombre}</h4>
              <p style={{ color: "#2563eb" }}>{formatoCOP(p.precio)}</p>
              <button onClick={() => handleAgregar(p)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}