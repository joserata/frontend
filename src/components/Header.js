import React from 'react';

const Header = () => {
  return (
    <div>
      {/* Servicios */}
      <div id="services">
        <div className="indicator d-none d-md-block"></div>
        <ul className="dropdown-menu" id="servicios">
          <li>
            <a href="https://smartkey.xertica.com/cloudkey/a/unal.edu.co/user/login" target="_blank" rel="noopener noreferrer">
              <img src="images/icnServEmail.png" width="32" height="32" alt="Correo Electrónico" />Correo Electrónico
            </a>
          </li>
          <li>
            <a href="https://dninfoa.unal.edu.co" target="_blank" rel="noopener noreferrer">
              <img src="images/icnServSia.png" width="32" height="32" alt="Dirección Nacional de Información Académica" />DINARA - SIA
            </a>
          </li>
          <li>
            <a href="http://bibliotecas.unal.edu.co" target="_blank" rel="noopener noreferrer">
              <img src="images/icnServLibrary.png" width="32" height="32" alt="Biblioteca" />Bibliotecas
            </a>
          </li>
          <li>
            <a href="http://personal.unal.edu.co" target="_blank" rel="noopener noreferrer">
              <img src="images/icnServCall.png" width="32" height="32" alt="Convocatorias" />Convocatorias
            </a>
          </li>
          <li>
            <a href="http://identidad.unal.edu.co" target="_blank" rel="noopener noreferrer">
              <img src="images/icnServIdentidad.png" width="32" height="32" alt="Identidad UNAL" />Identidad UNAL
            </a>
          </li>
        </ul>
      </div>

      {/* Header */}
      <header id="unalTop">
        {/* Logo */}
        <div className="logo">
          <a href="https://unal.edu.co">
            <svg width="93%" height="93%">
              <image xlinkHref="images/escudoUnal.svg" width="100%" height="100%" className="hidden-print" alt="Escudo de la Universidad Nacional de Colombia" />
            </svg>
            <img src="images/escudoUnal_black.png" className="d-none d-print-block" alt="Escudo de la Universidad Nacional de Colombia" />
          </a>
        </div>

        {/* Seal */}
        <div className="seal">
          <img className="hidden-print" alt="Escudo de la República de Colombia" src="images/sealColombia.png" width="66" height="66" />
          <img className="d-none d-print-block" alt="Escudo de la República de Colombia" src="images/sealColombia_black.png" width="66" height="66" />
        </div>

        {/* Menú superior */}
        <div className="firstMenu d-none d-md-block">
          <div className="content-fluid">
            <nav className="navbar navbar-expand-md nav navbar-dark">
              {/* Perfiles */}
              <div className="collapse navbar-collapse navbar-default" id="navbarSupportedContent">
                <nav id="profiles">
                  <ul className="mr-auto nav justify-content-end">
                    <li className="nav-item item_Aspirantes">
                      <a href="http://aspirantes.unal.edu.co">Aspirantes</a>
                    </li>
                    <li className="nav-item item_Estudiantes">
                      <a href="http://estudiantes.unal.edu.co">Estudiantes</a>
                    </li>
                    <li className="nav-item item_Egresados">
                      <a href="http://egresados.unal.edu.co">Egresados</a>
                    </li>
                    <li className="nav-item item_Docentes">
                      <a href="http://docentes.unal.edu.co">Docentes</a>
                    </li>
                    <li className="nav-item item_Administrativos">
                      <a href="http://administrativos.unal.edu.co">Administrativos</a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Redes sociales */}
              <ul className="socialLinks d-none d-md-block">
                <li>
                  <a href="https://www.facebook.com/UNALOficial" target="_blank" className="facebook" title="Página oficial en Facebook"></a>
                </li>
                <li>
                  <a href="https://twitter.com/UNALOficial" target="_blank" className="twitter" title="Cuenta oficial en Twitter"></a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCnE6Zj2llVxcvL5I38B0Ceg" target="_blank" className="youtube" title="Canal oficial de Youtube"></a>
                </li>
              </ul>

              {/* Idioma */}
              <div className="collapse btn-group languageMenu d-none d-md-block">
                <div className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                  es<span className="caret"></span>
                </div>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="index.html#">EN - English</a></li>
                  <li><a href="index.html#">GUC - Wayuunaiki</a></li>
                  <li><a href="index.html#">PBB - Nasa yuwe</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* Menú inferior */}
        <div id="bs-navbar" className="navigation d-none d-md-block">
          {/* Título del sitio */}
          <div className="site-url" id="subdominio">
            <a href="http://gestiondeinformacion.unal.edu.co/">gestiondeinformacion.unal.edu.co</a>
          </div>

          {/* Buscador */}
          <div className="buscador" id="buscador">
            <div className="gcse-searchbox-only" data-resultsurl="https://unal.edu.co/resultados-de-la-busqueda/" data-newwindow="true"></div>
          </div>

          {/* Main menu */}
          <div className="navbar-dark mainMenu" id="main_menu_container">
            <div className="btn-group ghost_button">
              <div style={{ width: 0, paddingLeft: 0, paddingRight: 0 }} className="btn disabled">
                <span className="caret"> </span>
              </div>
            </div>

            {/* Sedes */}
            <div className="btn-group menu_sedes">
              <div className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                Sedes<span className="caret"></span>
              </div>
              <ul className="dropdown-menu" id="sedes">
                <li>
                  <a className="dropdown-item" href="http://amazonia.unal.edu.co" target="_blank">Amazonia</a>
                  <span className="caret-right"></span>
                </li>
                <li>
                  <a className="dropdown-item" href="http://bogota.unal.edu.co" target="_blank">Bogotá</a>
                  <span className="caret-right"></span>
                </li>
                <li>
                  <a className="dropdown-item" href="http://caribe.unal.edu.co" target="_blank">Caribe</a>
                  <span className="caret-right"></span>
                </li>
                {/* Agregar más sedes según sea necesario */}
              </ul>
            </div>
            
          </div>
        </div>
      </header>
      
    </div>
    
  );
};

export default Header;
