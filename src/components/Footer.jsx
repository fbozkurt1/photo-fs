import React from "react";
import Contact from "../Pages/Contact";

const Footer = () => (
  <footer className="ftco-footer py-5">
    <hr />
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            Copyright &copy;{new Date().getFullYear()} Tüm hakları saklıdır.
          </p>

          <ul className="ftco-footer-social p-0">
            <li className="ftco-animate">
              <a href="#">
                <span className="fab fa-twitter fa-2x"></span>
              </a>
            </li>
            <li className="ftco-animate">
              <a href="#">
                <span className="fab fa-facebook fa-2x"></span>
              </a>
            </li>
            <li className="ftco-animate">
              <a href="#">
                <span className="fab fa-instagram fa-2x"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
