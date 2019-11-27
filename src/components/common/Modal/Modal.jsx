import React from "react";
import PropTypes from "prop-types";

class Modal extends React.Component {
  componentDidMount() {}

  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: "#fff",
      borderRadius: 5,

      margin: "0 auto",
      padding: 30
    };

    return (
      <div className="modal" style={{ modalStyle }}>
        {this.props.children}
        <div className="footer">
          {/* <button
            onClick={this.props.onClose}
            type="button"
            className="btn btn-primary"
            style={{ position: "fixed" }}
          >
            <span className="fa fa-window-close mr-2" aria-hidden="true"></span>
            Kapat
          </button> */}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
