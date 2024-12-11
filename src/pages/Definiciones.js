import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Definiciones.css"; // Archivo para los estilos de la página

const Definiciones = () => {
  const [definiciones, setDefiniciones] = useState([]);

  useEffect(() => {
    const fetchDefiniciones = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/definiciones/");
        setDefiniciones(response.data);
      } catch (error) {
        console.error("Error al obtener las definiciones:", error);
      }
    };
    fetchDefiniciones();
  }, []);

  return (
    <div className="definiciones-container">
      <h1>Definiciones</h1>
      <div className="definiciones-list">
        {definiciones.map((definicion) => (
          <div key={definicion.id} className="definicion-card">
            <h2>{definicion.titulo}</h2>
            <p>{definicion.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Definiciones;
