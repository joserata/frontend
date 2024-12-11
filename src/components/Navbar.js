import React from "react";
import { Link } from "react-router-dom"; // Usamos Link en lugar de <a> para navegación interna en React
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Progiweb</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/documentacion">Documentación</Link></li>
        <li><Link to="/normatividad">Normatividad</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/definiciones">Definiciones</Link></li> {/* Nuevo enlace a Definiciones */}
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
