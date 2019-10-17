import React, { Component } from "react";
import $ from "jquery";
class Login extends Component {
  state = {};

  componentDidMount() {
    var showPass = 0;
    $(".btn-show-pass").on("click", function() {
      if (showPass == 0) {
        $(this)
          .next("input")
          .attr("type", "text");
        $(this)
          .find("i")
          .removeClass("fa-eye");
        $(this)
          .find("i")
          .addClass("fa-eye-slash");
        showPass = 1;
      } else {
        $(this)
          .next("input")
          .attr("type", "password");
        $(this)
          .find("i")
          .removeClass("fa-eye-slash");
        $(this)
          .find("i")
          .addClass("fa-eye");
        showPass = 0;
      }
    });
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
            <span className="login100-form-title p-b-32"></span>

            <div
              className="wrap-input100 validate-input m-b-36"
              data-validate="Username is required"
            >
              <input
                className="input100"
                type="text"
                placeholder="Kullanıcı Adı"
                name="username"
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-12"
              data-validate="Password is required"
            >
              <span className="btn-show-pass">
                <i className="fa fa-eye"></i>
              </span>
              <input
                className="input100"
                placeholder="Parola"
                type="password"
                name="pass"
              />
              <span className="focus-input100"></span>
            </div>

            <div className="flex-sb-m w-full p-b-48">
              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" for="ckb1">
                  Beni Hatırla
                </label>
              </div>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Giriş</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
