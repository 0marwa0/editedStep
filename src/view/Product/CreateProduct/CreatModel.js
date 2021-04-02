/** @format */
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineLock } from "react-icons/ai";

import React from "react";
import "./index.css";
export const CreateComponent = (props) => {
  return (
    <div>
      <div className='justifyClass'>
        {" "}
        <div style={{ marginTop: "-1%" }}>
          <div className='input_wrapper '>
            <p> name</p>
            <span className='input_border'>
              <input
                type='text'
                placeholder='S type calvicle'
                width='100%'
                onChange={(e) => props.handelChange(e, "name")}
              />
            </span>
          </div>
        </div>
        <div className='stretch_flex2 '>
          <div className='input_wrapper '>
            <p>size</p>
            <span className='input_border '>
              <input
                type='text'
                placeholder='S type calvicle'
                width='100%'
                onChange={(e) => props.handelChange(e, "size")}
              />
            </span>
          </div>
        </div>
      </div>
      <div className='input_wrapper space_wrapper'>
        <p>price</p>
        <span className='input_border '>
          {" "}
          <input
            type='text'
            width='100%'
            placeholder='$ 1,000'
            onChange={(e) => props.handelChange(e, "price")}
          />
        </span>
      </div>
      <div className='input_wrapper space_wrapper'>
        <p>Discrption</p>
        <span className='input_border '>
          <textarea
            type='text'
            width='100%'
            rows='4'
            style={{ height: "140px" }}
            onChange={(e) => props.handelChange(e, "description")}
          />
        </span>
      </div>
    </div>
  );
};

export const CreateCategory = (props) => {
  return (
    <div className='input_wrapper space_wrapper'>
      <p>Category name</p>
      <span className='input_border '>
        <input
          type='text'
          width='100%'
          onChange={(e) => props.handelChange(e)}
        />
      </span>
    </div>
  );
};

export const CreateSubGroup = (props) => {
  return (
    <div className='input_wrapper space_wrapper'>
      <p>Subgroup name</p>
      <span className='input_border '>
        <input
          type='text'
          width='100%'
          onChange={(e) => props.handelChange(e)}
        />
      </span>
    </div>
  );
};

export const CreateGroup = (props) => {
  return (
    <div className='input_wrapper space_wrapper'>
      <p>Group name</p>
      <span className='input_border '>
        <input
          type='text'
          width='100%'
          onChange={(e) => props.handelChange(e)}
        />
      </span>
    </div>
  );
};
