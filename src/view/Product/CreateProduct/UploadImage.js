/** @format */

import React, { Component } from "react";
import "./index.css";
import { AiOutlineClose } from "react-icons/ai";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className='upload_text'>Product photo</div>
        <div
          // onDragOver={() => this.props.Active(true)}
          // onDragLeave={() => this.props.Active(false)}
          onDragOver={this.props.dragOver}
          onDragEnter={this.props.dragEnter}
          onDragLeave={this.props.dragLeave}
          onDrop={this.props.fileDrop}
          className={
            this.props.isActive ? "upload_modal active" : "upload_modal "
          }>
          <div className='upload_img_close'>
            {this.props.allowToChange ? (
              <AiOutlineClose
                size='20px'
                style={{ cursor: "pointer" }}
                onClick={this.props.removeImage}
              />
            ) : null}

            <img src={this.props.Image} className='img' />
          </div>
          <span>
            Drop file here or
            <input
              type='file'
              id='file'
              onChange={(e) => this.props.handleImageChange(e, "image")}
            />
            <label for='file'> browse</label>
          </span>
        </div>
      </div>
    );
  }
}

export default index;
