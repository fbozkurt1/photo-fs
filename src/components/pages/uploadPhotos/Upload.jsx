import React, { Component } from "react";
import Sidebar from "../../common/Sidebar";
import "../../../assets/css/upload.css";
class Upload extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);
    this.state = {
      file: []
    };
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
    this.removeImages = this.removeImages.bind(this);
  }

  /*Seçilen resimleri file dizisinde tutar.
   Yeni resim eklendiğinde fileArray'a ekler ve state'i günceller */

  uploadMultipleFiles(e) {
    /*e.target.files FileList dizisi oluşturuyor. 
    Sayfayı yenilemeden,her 'uploadMultipleFiles' metodu çağrıldığında 
    yeni bir FileList dizisini this.fileObj dizisine ekler.*/

    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj.length; i++) {
      for (let j = 0; j < this.fileObj[i].length; j++) {
        // this.fileArray.push(URL.createObjectURL(this.fileObj[0][j]));
        let imgUrl = URL.createObjectURL(this.fileObj[i][j]);
        let imgName = this.fileObj[i][j].name;
        let imgId = j;
        if (this.fileArray.find(img => img.imgName == imgName) == null) {
          this.fileArray.push({ imgId, imgName, imgUrl });
        }
      }
    }

    this.setState({ file: this.fileArray });
  }

  removeImages(event) {
    /*event.target.value returns the value between button tags.
    To reach data-* values, use 'dataset'.*/

    let Id = event.currentTarget.dataset.att;
    const items = this.state.file.filter(img => img.imgId != Id);
    this.setState({
      file: items
    });
    console.log(this.state.file);
  }

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
                    {this.state.file.length === 0
                      ? "Fotoğrafları seçiniz"
                      : this.state.file.length + " fotoğraf eklendi"}
                  </label>
                </div>
              </div>
            </div>
            <div className="container mt-3">
              <div className="row">
                {this.state.file.map(url => (
                  <div className="col-md-3">
                    <img
                      id="uploadedImage"
                      className="img-fluid img-thumbnail"
                      src={url.imgUrl}
                      alt=""
                    />
                    <button
                      className="btn"
                      id="delete"
                      type="button"
                      onClick={this.removeImages}
                      data-att={url.imgId}
                    >
                      <i
                        className="fa fa-times fa-3x"
                        style={{ color: "red" }} //icon color
                      ></i>
                    </button>
                  </div>
                ))}

                {/* <div className="col-lg-3 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                    alt=""
                  />
                  <button className="btn" id="delete" type="button">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                    alt=""
                  />
                  <button className="btn" id="delete" type="button">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                    alt=""
                  />
                  <button className="btn" id="delete" type="button">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                    alt=""
                  />
                  <button className="btn" id="delete" type="button">
                    <i class="fa fa-trash"></i>
                  </button>
                </div> */}
              </div>
              {this.state.file.length === 0 ? null : (
                <div className="row mt-3 float-right mb-5">
                  <div className="col-md-10 align-items-right">
                    <button type="button" className="btn btn-success">
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
