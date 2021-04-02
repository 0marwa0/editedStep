/** @format */

import React from "react";
import "./index.css";
const index = () => {
  return (
    <div className='orderModel'>
      <div className='header'>
        <div>Patient name</div>
        <div> Location</div>
        <div>Total</div>
        <div>Status</div>
        <div>Created</div>
      </div>
      <img src={require("../../shared/Icon/no_data_found.png")} />
    </div>
  );
};

export default index;
