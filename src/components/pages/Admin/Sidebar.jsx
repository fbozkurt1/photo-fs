import React, { Component } from "react";
import "../../../assets/css/sidebar.css";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="nav-side-menu ">
          <div className="brand">Kullanıcı İsmi Gelicek</div>
          <i
            className="fa fa-bars fa-2x toggle-btn"
            data-toggle="collapse"
            data-target="#menu-content"
          ></i>
          <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard fa-lg"></i> Yönetim Paneli
                </a>
              </li>

              <li
                data-toggle="collapse"
                data-target="#products"
                className="collapsed active"
              >
                <a href="#">
                  <i className="fas fa-users-cog fa-lg"></i>
                  <span className="ml-2">Yönetici İşlemleri</span>
                  <span className="fas fa-arrow-down float-right pt-3 pr-3"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="products">
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Personel Ekle
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Personel Bilgileri
                    Düzenle
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Personel Listesi
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Personel Durum
                    Görüntüleme
                  </a>
                </li>
              </ul>

              <li
                data-toggle="collapse"
                data-target="#service"
                className="collapsed"
              >
                <a href="#">
                  <i className="fas fa-address-book fa-lg"></i>
                  <span className="ml-2">Müşteri İşlemleri</span>
                  <span className="fas fa-arrow-down float-right pt-3 pr-3"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="service">
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Müşteri Ekle
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Müşteri Düzenle
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Müşteri Sil
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Fotoğraf Yükleme
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Teslim Edilenler
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Teslim Edilmeyenler
                  </a>
                </li>
              </ul>

              <li
                data-toggle="collapse"
                data-target="#new"
                className="collapsed"
              >
                <a href="#">
                  <i className="fas fa-envelope fa-lg"></i>
                  <span className="ml-2">Mesajlar</span>
                  <span className="fas fa-arrow-down float-right pt-3 pr-3"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="new">
                <li>
                  <a href="#">
                    <i className="fas fa-arrow-right"></i> Geri Dönüş
                    Bildirimleri
                  </a>
                </li>
              </ul>

              <li>
                <a href="#">
                  <i className="fa fa-user fa-lg"></i>
                  <span className="ml-2">Randevu Talepleri</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-paper-plane fa-lg"></i>
                  <span className="ml-2">Mail veya Bildirim Gönder</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-calendar-alt fa-lg"></i>
                  <span className="ml-2">Takvim</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-sign-out-alt fa-lg"></i>
                  <span className="ml-2">Çıkış</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
