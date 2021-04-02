/** @format */

import React from "react";
import "./index.css";
import { FaRegUserCircle } from "react-icons/fa";

class index extends React.Component {
  render() {
    return (
      <div className='navBar'>
        <div>
          <img
            src={require("../shared/Icon/logo1.svg")}
            alt=''
            className='nav_icon'
            style={{ height: "40px" }}
          />
        </div>
        <div>
          <FaRegUserCircle
            color='white'
            onClick={this.props.Logout}
            className='nav_icon'
            size='24px'
          />
          {/* <img src={require("../shared/Icon/User.png")} /> */}
        </div>
      </div>
    );
  }
}

export default index;
