import React from "react";
import "./ServiceCards.css";

const services = [
  { id: 1, title: "Desarrollo Web", description: "Sitios web modernos y responsivos." },
  { id: 2, title: "Aplicaciones Móviles", description: "Apps nativas para Android e iOS." },
  { id: 3, title: "Consultoría IT", description: "Asesoría en estrategias tecnológicas." },
];

const ServiceCards = () => {
  return (
    <div className="services">
      <h2>Nuestros Servicios</h2>
      <div className="cards-container">
        {services.map((service) => (
          <div key={service.id} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
