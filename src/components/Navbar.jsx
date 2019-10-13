import React from "react";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul className="nav-menu">
        <li>
          <a data-scroll="home" href="#home" className="dot active">
            <span>Anasayfa</span>
          </a>
        </li>
        <li>
          <a data-scroll="about" href="#about" className="dot">
            <span>Hakkımızda</span>
          </a>
        </li>
        <li>
          <a data-scroll="services" href="#services" className="dot">
            <span>Hizmetlerimiz</span>
          </a>
        </li>
        <li>
          <a data-scroll="work" href="#work" className="dot">
            <span>Randevu</span>
          </a>
        </li>
        <li>
          <a data-scroll="contact" href="#contact" className="dot">
            <span>İletişime Geçin</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
