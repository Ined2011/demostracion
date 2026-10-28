# 🛒 TiendaOnline

Plataforma de comercio electrónico (tienda en línea) desarrollada con React. Permite a los clientes consultar un catálogo de productos, armar un carrito de compras y finalizar su pedido.

Proyecto de formación del SENA – Análisis y Desarrollo de Software.

## 📋 Funcionalidades

| Módulo | Historia de usuario | Estado |
|---|---|---|
| Catálogo de productos (búsqueda, filtros y orden) | HU-02 | ✅ Listo |
| Carrito global (agregar, cantidades y stock) | HU-03 | 🔄 En desarrollo |
| Inicio de sesión del cliente | HU-01 | ⏳ Pendiente |
| Finalización de compra | HU-04 | ⏳ Pendiente |

## 🛠️ Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- ESLint

## 🚀 Instalación y uso

1. Clonar el repositorio:

   ```bash
   git clone [URL-de-tu-repositorio]
   cd tienda-online
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Iniciar el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## 📁 Estructura del proyecto

```
src/
├── components/   Componentes reutilizables (Navbar)
├── context/      Estado global (CartContext: carrito)
├── data/         Datos de prueba de productos
├── pages/        Pantallas (Catalogo, Carrito, Login, Checkout)
├── App.jsx       Rutas de la aplicación
└── main.jsx      Punto de entrada
```

## 📄 Documentación

El informe técnico de validación de requisitos (prototipos y casos de prueba CP-01 a CP-04) está en la carpeta `docs/`.

## 👩‍💻 Autora

- **Nombre:** Mayerlin Cubides
- **Ficha:** 3607766
- **Centro de formación:** SERVICIO NACIONAL DE APRENDIZAJE – SENA
- **Instructor:** 
