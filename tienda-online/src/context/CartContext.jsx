import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const agregar = (p) =>
    setItems((prev) => {
      const existe = prev.find((i) => i.id === p.id);
      if (existe)
        return prev.map((i) =>
          i.id === p.id ? { ...i, cantidad: Math.min(i.cantidad + 1, p.stock) } : i
        );
      return [...prev, { ...p, cantidad: 1 }];
    });

  const cambiarCantidad = (id, cant) =>
    setItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, cantidad: Math.max(1, Math.min(cant, i.stock)) } : i
      )
    );

  const eliminar = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
  const vaciar = () => setItems([]);

  const subtotal = items.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const totalItems = items.reduce((s, i) => s + i.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ items, agregar, cambiarCantidad, eliminar, vaciar, subtotal, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}