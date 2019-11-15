import React, { Component } from "react";
import $ from "jquery";

class Navbar extends Component {
  state = {};

  componentDidMount() {
    var link = $("#navbar a.dot");

    // Move to specific section when click on menu link
    link.on("click", function(e) {
      var target = $($(this).attr("href"));
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        600
      );
      $(this).addClass("active");
      e.preventDefault();
    });

    $(window).on("scroll", function() {
      scrNav();
    });

    function scrNav() {
      var sTop = $(window).scrollTop();
      $("section").each(function() {
        var id = $(this).attr("id"),
          offset = $(this).offset().top - 1,
          height = $(this).height();
        if (sTop >= offset && sTop < offset + height) {
          link.removeClass("active");
          $("#navbar")
            .find('[data-scroll="' + id + '"]')
            .addClass("active");
        }
      });
    }
  }

  componentWillUnmount() {
    $(window).off("scroll");
  }

  render() {
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
            <a data-scroll="contact" href="#contact" className="dot">
              <span>Randevu ve İletişim</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
