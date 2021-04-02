/** @format */

import React from "react";
import "./index.css";
import { FiSettings } from "react-icons/fi";

import { Link } from "react-router-dom";

const Header = ({ slug, DisplaySideNav }) => {
  return (
    <div className='header_wrapper'>
      <div className='container'>
        <div className='header_wrapper_inner'>
          <div>
            <span>
              <Link to='/'>
                {" "}
                <span>Home</span>{" "}
              </Link>
            </span>
            <span className='slash_icon'>/</span> {slug}
          </div>
          {slug == "Products List" ? (
            <div className='settingIcon'>
              <FiSettings onClick={DisplaySideNav} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
