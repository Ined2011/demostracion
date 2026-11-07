import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importamos el hook para la navegación
import './Login.css'; // Importamos los estilos

function Login() {
  // 2. Inicializamos la función de navegación
  const navigate = useNavigate(); 

  // Estados para capturar las credenciales
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validación básica
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    // Aquí conectarías con tu backend/API (ej. usando fetch o axios)
    console.log('Enviando datos a la tienda:', { email, password });
    alert('¡Inicio de sesión exitoso!');

    // 3. Redirigimos al usuario a la página de inicio (Catálogo)
    navigate('/'); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Espacio para el logo de tu tienda */}
        <div className="login-logo">
          <h2>MiTienda<span>Online</span></h2>
        </div>

        <h3>¡Hola de nuevo!</h3>
        <p className="login-subtitle">Ingresa tus datos para acceder a tu cuenta</p>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          {/* Campo de Correo */}
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tu@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo de Contraseña */}
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          {/* Enlaces de ayuda */}
          <div className="login-actions">
            <label className="remember-me">
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#forgot" className="forgot-link">¿Olvidaste tu contraseña?</a>
          </div>

          {/* Botón de ingreso */}
          <button type="submit" className="btn-login">
            Iniciar Sesión
          </button>
        </form>

        {/* Enlace de registro */}
        <p className="register-redirect">
          ¿No tienes una cuenta? <a href="#register">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
