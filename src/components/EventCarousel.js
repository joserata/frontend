import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import "./EventCarousel.css";

const EventCarousel = () => {
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
    <div className="event-carousel">
      <h2>Próximos Eventos</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {eventos.map((evento) => (
          <SwiperSlide key={evento.id}>
            <div className="card">
              <img src={evento.imagen} alt={evento.titulo} className="card-image" />
              <h3>{evento.titulo}</h3>
              <p>{evento.descripcion}</p>
              <a
                href={evento.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                Leer más
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
