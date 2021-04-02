/** @format */

import React from "react";
import "./index.css";
import "../../../App.css";
import { FaEye } from "react-icons/fa";

function EditPassword(props) {
  return (
    <div className='edit_model'>
      <p className='alert_text'>
        if you renewed this old password will not work again
      </p>
      <p>also there is no way to undo this action after it's done</p>
      <p>
        The password could be any combination of letters ,numbers and symbols
      </p>
      <br />
      <div className={props.isMatch ? "input_wrapper" : "input_error"}>
        <div>
          <input
            type='password'
            width='100%'
            onChange={(e) => props.handelPassword(e, "password")}
          />
        </div>
      </div>
      <br />
      <div className={props.isMatch ? "input_wrapper" : "input_error"}>
        <div>
          {" "}
          conform password
          <br /> <br />
          <input
            type='password'
            width='100%'
            onChange={(e) => props.handelPassword(e, "rePassword")}
            placeholder='Re write the same password'
          />
          <p className='errorMsg'>{props.errorMsg}</p>
          {/* <FaEye className='eye_icon' /> */}
        </div>
      </div>
    </div>
  );
}

export default EditPassword;
