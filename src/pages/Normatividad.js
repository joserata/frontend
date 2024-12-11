import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import "./Normatividad.css"; // Asegúrate de tener este archivo para estilos

const Normatividad = () => {
  const [normatividad, setNormatividad] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/normatividad/");
        setNormatividad(response.data);
      } catch (error) {
        console.error("Error fetching normatividad data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="normatividad-container">
      <h1>Normatividad</h1>
      <div className="card-grid">
        {normatividad.map((item) => (
          <Card
            key={item.id}
            title={item.titulo}
            description={item.descripcion}
            link={item.enlace}
          />
        ))}
      </div>
    </div>
  );
};

export default Normatividad;
