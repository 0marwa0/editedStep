/** @format */

import React from "react";
import "./index.css";
import { AiOutlineLock } from "react-icons/ai";
function Index({ handelInputChange, data }) {
  let name = data.map((i) => i.name);
  let phone = data.map((i) => i.phone);
  let location = data.map((i) => i.location);
  let specialty = data.map((i) => i.specialty);
  console.log(data, "what sap");
  return (
    <div>
      <div className='two_col_flex paddingTop'>
        <div className='input_wrapper space_wrapper'>
          <p>Costumer name</p>
          <span className='input_border'>
            <input
              type='text'
              width='100%'
              defaultValue={name}
              onChange={(e) => handelInputChange(e, "name")}
              placeholder='test'
            />
          </span>
        </div>
        <div className='input_wrapper space_wrapper'>
          <p>Phone number</p>
          <span className='input_border '>
            <input
              type='text'
              width='100%'
              defaultValue={phone}
              onChange={(e) => handelInputChange(e, "phone")}
            />
          </span>
        </div>
      </div>
      <div className='two_col_flex paddingTop'>
        <div className='input_wrapper space_wrapper'>
          <p>Location</p>
          <span className='input_border'>
            <input
              type='text'
              width='200px'
              defaultValue={location}
              // onChange={(e) => handelInputChange(e, "location")}
            />
          </span>
        </div>
        <div className='input_wrapper space_wrapper'>
          <p>Hostpital</p>
          <span className='input_border'>
            <input
              type='text'
              // onChange={(e) => handelInputChange(e, "his")}
            />
          </span>
        </div>
        <div className='input_wrapper space_wrapper'>
          <p>Specialty</p>
          <span className='input_border'>
            <input
              type='text'
              defaultValue={specialty}
              onChange={(e) => handelInputChange(e, "specialty")}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Index;
