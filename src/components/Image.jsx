import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    const { imageUrl } = this.props;
    return (
      <div className="col-md-4 ftco-animate">
        <div
          className="model img d-flex align-items-end"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="desc w-100 px-4">
            <div className="text w-100 mb-3">
              <span>
                <small>Daylight By</small>
              </span>
              <i>
                <h2>Sinem Kobaner</h2>
              </i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
