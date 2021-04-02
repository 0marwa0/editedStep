/** @format */

import "./index.css";
import React from "react";
import "../../../App.css";
import { ToastContainer, toast } from "react-toastify";

const index = (props) => {
  return (
    <div>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar
        newestOnTop={true}
        closeButton={false}
        toastClassName='tostStyle'
        pauseOnFocusLoss
        draggable
        rtl={false}
        pauseOnHover
      />
      <div className='DeleteModal'>
        <div>
          <p className='alert_text'>
            if you delete this account it will be gone permenantly
          </p>

          <p> also there is no way to undothis action after it's done</p>
          <p>
            To delete the acount write the customer name with respect to letter
            casing
            {/* <span> "Mohammed"</span> */}
          </p>
        </div>
        <div className={props.isMatch ? "input_wrapper" : "input_error"}>
          <div>
            <input type='text' onChange={(e) => props.handelNameCheck(e)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
