import React, { Component } from "react";
import Sidebar from "../../common/Sidebar";

class Upload extends Component {
  fileObj = [];
  fileArray = [];
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      file: []
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    // this.onHover = this.onHover.bind(this);
    // this.offHover = this.offHover.bind(this);
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ file: this.fileArray });
  }
  //   onHover() {
  //     this.setState(state => {
  //       state.hover = true;
  //     });
  //   }
  //   offHover() {
  //     this.setState(state => {
  //       state.hover = false;
  //     });
  //   }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-5 mx-auto mt-5">
                <div className="custom-file overflow-hidden rounded-pill mb-5">
                  <input
                    multiple
                    id="customFile"
                    type="file"
                    className="custom-file-input rounded-pill"
                    onChange={this.uploadMultipleFiles}
                  />
                  <label
                    htmlFor="customFile"
                    className="custom-file-label rounded-pill"
                  >
                    Fotoğrafları Seçiniz.
                  </label>
                </div>
              </div>
            </div>
            <div className="container mt-3">
              <div className="row text-center text-lg-left">
                {this.state.file.map((url, index) => (
                  <div className="col-lg-3 col-md-4 col-6">
                    <img
                      //   onMouseLeave={this.offHover}
                      //   onMouseEnter={this.onHover}
                      className="img-fluid img-thumbnail"
                      src={url}
                      alt=""
                    />
                  </div>
                ))}

                {/* <div className="col-lg-3 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                    alt=""
                  />
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/aob0ukAYfuI/400x300"
                    alt=""
                  />
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/EUfxH-pze7s/400x300"
                    alt=""
                  />
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/M185_qYH8vg/400x300"
                    alt=""
                  />
                </div> */}
              </div>
              {this.state.file.length === 0 ? null : (
                <div className="row mt-3 float-right">
                  <div className="col-md-10 align-items-right">
                    <button type="button" class="btn btn-success">
                      Kaydet
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
