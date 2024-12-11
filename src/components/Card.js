import React from "react";
import "./Card.css"; // Archivo de estilos para la card

const Card = ({ title, description, link, image }) => {
  return (
    <div className="card">
      {/* Mostrar imagen si está disponible */}
      {image && <img src={image} alt={title} className="card-image" />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} className="card-link">
            Más información
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
