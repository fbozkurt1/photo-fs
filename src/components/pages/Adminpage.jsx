import React, { Component } from "react";
import Sidebar from "./Admin/Sidebar";
import CardView from "./Admin/CardView";
import TempDataTable from "./Admin/TempDataTable";
import Scheduler from "./Admin/Calendar";
import Footer from "../sections/Footer";
import Progress from "../forms/formComponents/Progress";
import Modal from "./Admin/Modal/Modal";

class Adminpage extends Component {
  constructor() {
    super();

    this.state = {
      isShowing: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3">
                <CardView
                  type="card bg-primary text-white"
                  iconT="fas fa-comment"
                  cardF="card-footer bg-primary text-white"
                  text="Mesajınız var!"
                />
              </div>
              <div className="col-md-3">
                <CardView
                  type="card bg-primary text-white"
                  iconT="fas fa-comment"
                  cardF="card-footer bg-primary text-white"
                  text="Mesajınız var!"
                />
              </div>
              <div className="col-md-3">
                <CardView
                  type="card bg-primary text-white"
                  iconT="fas fa-comment"
                  cardF="card-footer bg-primary text-white"
                  text="Mesajınız var!"
                />
              </div>
            </div>
            <div>
              <Modal deneme="fuat">
                <h1>asdadasdasdsa</h1>
                <h2>asdadasdasd</h2>
              </Modal>
            </div>
            {/* <div className="row">
              {this.state.isShowing ? (
                <div
                  onClick={this.closeModalHandler}
                  className="back-drop"
                ></div>
              ) : null}

              <button
                className="open-modal-btn"
                onClick={this.openModalHandler}
              >
                Open Modal
              </button>

              <Modal
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}
              >
                Maybe aircrafts fly very high because they don't want to be seen
                in plane sight?
              </Modal>
            </div> */}

            <div className="row mt-5">
              <div className="col-md-12">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adminpage;
