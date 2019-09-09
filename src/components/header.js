import React from "react";
import portalLogo from "../imgs/portal.png";
import "../styles/header.css";

class Header extends React.Component {
  render() {
    const actualPage = "Inicio";
    return (
      <div className="header">
        <div className="top">
          <img src={portalLogo} alt="Portal" className="img" />
        </div>
        <nav className="navbar">
          <span>Razt</span>
          <a href="#">Inicio</a>
          <a href="#">Portafolio</a>
          <a href="#">Acerca de mi</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    );
  }
}

export default Header;
