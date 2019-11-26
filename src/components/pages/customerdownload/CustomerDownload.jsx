import React, { Component } from "react";
import Sidebar from "../../common/Sidebar";
import "../../../assets/css/customerDownload.css";
class CustomerDownload extends Component {
  tempArrImages = [];
  dataset = [];
  constructor(props) {
    super(props);

    this.addImages = this.addImages.bind(this);

    this.state = {
      user: {
        id: "1",
        name: "Sefa ÇOTOĞLU"
      },
      selectedImages: [],
      uploadedImages: []
    };
  }
  componentDidMount() {
    //Creating datset for ımages
    for (let index = 0; index < 28; index++) {
      this.dataset.push({
        id: index,
        url: "https://source.unsplash.com/pWkk7iiCoDM/400x300",
        isAdded: false
      });
    }
    //Görüntülenen resimler
    this.setState({
      uploadedImages: this.dataset
    });
  }

  /*
  id=index şeklinde kullanılıyor
  uploadedImages, müşterinin indirmesi için yüklenen fotoğraflar.
  selectedImages, müşterinin indirmek için seçtiği fotoğraflar.
  tempArrImages, seçilen fotoğrafların geçici olarak tutulduğu ve selectedImages güncellemek için kullanıldığı dizi.

  */
  addImages = event => {
    let id = event.currentTarget.dataset.id;
    let cloneUploadedImages = this.state.uploadedImages;

    if (this.tempArrImages.length < 20) {
      if (
        this.tempArrImages.findIndex(x => x.id === id) < 0 &&
        cloneUploadedImages[id].isAdded === false
      ) {
        this.tempArrImages.push({ id });
        //İconu değiştirmek için false, true oldu.icon checked
        cloneUploadedImages[id].isAdded = !cloneUploadedImages[id].isAdded;

        this.setState({
          uploadedImages: cloneUploadedImages,
          selectedImages: this.tempArrImages
        });

        console.log(this.state.selectedImages);
      } else {
        //İconu değiştirmek için true, false oldu.icon plus
        cloneUploadedImages[id].isAdded = !cloneUploadedImages[id].isAdded;
        //To remove img as id
        //Filter metodu ile son eleman silinmiyor ???
        this.tempArrImages.splice(id, 1);
        this.setState({
          uploadedImages: cloneUploadedImages,
          selectedImages: this.tempArrImages
        });
        console.log(this.state.selectedImages);
      }
    } else {
      alert("20 tane fotoğraf seçtiniz...");
      //  console.log("20 tane fotoğraf seçtiniz...");
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="row mt-5 ml-5">
            <h4>Hoşgeldiniz, {this.state.user.name}</h4>
            <div className="row"></div>
          </div>

          <div className="row">
            <div className="container">
              <div className="row mt-5">
                {this.state.uploadedImages.map((img, index) => (
                  <div key={index} id="imgdiv" className="col-md-2 mt-1">
                    <img
                      id="selected"
                      /*Add border to img when selected.*/
                      className={`img-fluid img-thumbnail ${
                        img.isAdded ? "choosen" : null
                      }`}
                      src={img.url}
                    />
                    <button
                      data-id={index}
                      className="btn"
                      id="hoverbutton"
                      type="button"
                      onClick={this.addImages}
                    >
                      {img.isAdded ? (
                        <i className="fa fa-check fa-2x"></i>
                      ) : (
                        <i className="fa fa-plus fa-2x"></i>
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div className="row mt-3 float-right mb-5">
                <div className="col-md-10 align-items-right">
                  <button type="button" className="btn btn-success">
                    İndir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerDownload;
