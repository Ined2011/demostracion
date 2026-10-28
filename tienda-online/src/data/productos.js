export const productos = [
  { id: 1, nombre: "Camiseta básica", categoria: "Ropa", precio: 39900, stock: 10 },
  { id: 2, nombre: "Jean clásico", categoria: "Ropa", precio: 89900, stock: 5 },
  { id: 3, nombre: "Chaqueta ligera", categoria: "Ropa", precio: 129900, stock: 3 },
  { id: 4, nombre: "Tenis urbanos", categoria: "Calzado", precio: 159900, stock: 8 },
  { id: 5, nombre: "Gorra deportiva", categoria: "Accesorios", precio: 29900, stock: 12 },
  { id: 6, nombre: "Audífonos Bluetooth", categoria: "Tecnología", precio: 119900, stock: 6 },
];

export const formatoCOP = (n) => "$ " + n.toLocaleString("es-CO");