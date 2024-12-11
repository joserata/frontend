import React from 'react';
import './Footer.css'; // Importa un archivo CSS para estilizar el footer

const Footer = () => {
  return (
    <footer className="clear container-fluid">
      <div className="row">
        {/* Sección de enlaces de interés */}
        <nav className="col-lg-3 col-md-3 col-sm-4 col-6 gobiernoLinea">
          <a href="http://www.legal.unal.edu.co" target="_top" rel="noopener noreferrer">Régimen Legal</a>
          <a href="http://personal.unal.edu.co" target="_top" rel="noopener noreferrer">Talento humano</a>
          <a href="https://portaladquisiciones.unal.edu.co/" target="_top" rel="noopener noreferrer">Contratación</a>
          <a href="http://personal.unal.edu.co" target="_top" rel="noopener noreferrer">Ofertas de empleo</a>
          <a href="http://launalcuenta.unal.edu.co/" target="_top" rel="noopener noreferrer">Rendición de cuentas</a>
          <a href="http://docentes.unal.edu.co/concurso-profesoral/" target="_top" rel="noopener noreferrer">Concurso docente</a>
          <a href="http://www.pagovirtual.unal.edu.co/" target="_top" rel="noopener noreferrer">Pago Virtual</a>
          <a href="http://controlinterno.unal.edu.co/" target="_top" rel="noopener noreferrer">Control interno</a>
          <a href="http://siga.unal.edu.co" target="_top" rel="noopener noreferrer">Calidad</a>
          <a href="http://unal.edu.co/buzon-de-notificaciones/" target="_self">Buzón de notificaciones</a>
        </nav>

        {/* Segunda sección de enlaces */}
        <nav className="col-lg-3 col-md-3 col-sm-4 col-6 gobiernoLinea">
          <a href="https://smartkey.xertica.com/cloudkey/a/unal.edu.co/user/login" target="_top" rel="noopener noreferrer">Correo institucional</a>
          <a href="#">Mapa del sitio</a>
          <a href="http://redessociales.unal.edu.co" target="_top" rel="noopener noreferrer">Redes Sociales</a>
          <a href="#">FAQ</a>
          <a href="http://quejasyreclamos.unal.edu.co/" target="_self">Quejas y reclamos</a>
          <a href="http://unal.edu.co/atencion-en-linea/" target="_self">Atención en línea</a>
          <a href="http://unal.edu.co/encuesta/" target="_self">Encuesta</a>
          <a href="#">Contáctenos</a>
          <a href="http://estadisticas.unal.edu.co/" target="_top" rel="noopener noreferrer">Estadísticas</a>
          <a href="#">Glosario</a>
        </nav>

        {/* Información de contacto */}
        <div className="col-lg-4 col-md-4 col-sm-4 col-12 footer-info">
          <div className="row footer-info-spacing">
            <p className="col-lg-6 col-md-12 col-sm-12 col-6 contacto">
              <strong>Contacto página web:</strong><br />
              Carrera 45 # 26-85 Of. 000<br />
              Edif. Uriel Gutiérrez<br />
              Bogotá D.C., Colombia<br />
              (+57 1) 316 5000 Ext. 00000
            </p>
            <p className="col-lg-6 col-md-12 col-sm-12 col-6 derechos">
              <a href="https://unal.edu.co/fileadmin/user_upload/docs/legal.pdf" target="_blank" rel="noopener noreferrer">&copy; Copyright 2019</a><br />
              Algunos derechos reservados.<br />
              <a href="mailto:correo@unal.edu.co">correo@unal.edu.co</a><br />
              <a href="acercade.html">Acerca de este sitio web</a><br />
              Actualización: 01/03/24
            </p>
          </div>
        </div>

        {/* Logos */}
        <div className="col-lg-2 col-md-2 col-sm-12 col-12 logos">
          <div className="row px-3">
            <div className="col-lg-6 col-md-12 col-sm-6 col-6 no-padding">
              <div className="row mx-1">
                <a className="col-md-12 col-sm-6 col-6" href="http://orgullo.unal.edu.co">
                  <img
                    className="hidden-print"
                    alt="Orgullo UN"
                    src="/images/log_orgullo.png"
                    width="78"
                    height="21"
                  />
                  <img
                    className="d-none d-print-block"
                    alt="Orgullo UN"
                    src="/images/log_orgullo_black.png"
                    width="94"
                    height="37"
                  />
                </a>
                <a className="col-md-12 col-sm-6 col-6 imgAgencia" href="https://agenciadenoticias.unal.edu.co">
                  <img
                    className="hidden-print"
                    alt="Agencia de Noticias"
                    src="/images/log_agenc.png"
                    width="94"
                    height="25"
                  />
                  <img
                    className="d-none d-print-block"
                    alt="Agencia de Noticias"
                    src="/images/log_agenc_black.png"
                    width="94"
                    height="37"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-6 col-6 no-padding">
              <div className="row mx-1">
                <a className="col-md-12 col-sm-6 col-6" href="https://www.gov.co/">
                  <img
                    alt="Portal Único del Estado Colombiano"
                    src="/images/log_gobiern.png"
                    width="67"
                    height="51"
                  />
                </a>
                <a className="col-md-12 col-sm-6 col-6" href="http://www.contaduria.gov.co/">
                  <img
                    alt="Contaduría General de la República"
                    src="/images/log_contra.png"
                    width="67"
                    height="51"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
