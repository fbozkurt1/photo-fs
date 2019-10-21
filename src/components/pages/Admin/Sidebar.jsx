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
                  <i className="fas fa-users-cog fa-lg"></i>Yönetici İşlemleri{" "}
                  <span className="fas fa-arrow-down float-right pt-3 pr-3"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="products">
                <li className="active">
                  <a href="#">Personel Ekle</a>
                </li>
                <li>
                  <a href="#">Personel Bilgleri Düzenle</a>
                </li>
                <li>
                  <a href="#">Personel Listesi</a>
                </li>
                <li>
                  <a href="#">Personel Durum Görüntüleme</a>
                </li>
              </ul>

              <li
                data-toggle="collapse"
                data-target="#service"
                className="collapsed"
              >
                <a href="#">
                  <i className="fas fa-address-book fa-lg"></i> Müşteri
                  İşlemleri{" "}
                  <span className="fas fa-arrow-down float-right pt-3 pr-3"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="service">
                <li>Müşteri Ekle</li>
                <li>Müşteri Düzenle</li>
                <li>Müşteri Sil</li>
                <li>Fotoğraf Yükleme</li>
                <li>Teslim Edilenler</li>
                <li>Teslim Edilmeyi Bekleyenler</li>
              </ul>

              <li
                data-toggle="collapse"
                data-target="#new"
                className="collapsed"
              >
                <a href="#">
                  <i className="fas fa-envelope fa-lg"></i> Mesajlar
                  <span className="fas fa-arrow-down float-right pt-3 pr-3"></span>
                </a>
              </li>
              <ul className="sub-menu collapse" id="new">
                <li>Geri Dönüş Bildirimleri</li>
              </ul>

              <li>
                <a href="#">
                  <i className="fa fa-user fa-lg"></i>Randevu Talepleri
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-paper-plane fa-lg"></i>Mail, Bildirim
                  Gönder
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-calendar-alt fa-lg"></i> Takvim
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-sign-out-alt fa-lg"></i> Çıkış
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
