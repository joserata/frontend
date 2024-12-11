import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Eventos.css";

const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/eventos/");
        setEventos(response.data);
      } catch (error) {
        console.error("Error fetching eventos data:", error);
      }
    };
    fetchEventos();
  }, []);

  return (
    <div className="eventos-container">
      <h1>Eventos</h1>
      <div className="card-grid">
        {eventos.map((evento) => (
          <div className="card" key={evento.id}>
            {/* Usa la URL completa para mostrar la imagen */}
            <img
              src={evento.imagen}
              alt={evento.titulo}
              className="card-image"
            />
            <h2>{evento.titulo}</h2>
            <p>{evento.descripcion}</p>
            <a href={evento.enlace} target="_blank" rel="noopener noreferrer">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventos;
