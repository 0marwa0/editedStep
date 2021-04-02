/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/fontawesome-free-solid";
import "./card.css";
const Card = ({ icon, cardName, cardInfo, btnName, className }) => {
  return (
    <div className={`card_wrapper ${className}`}>
      <div className='card_icon'>
        <img height='90px' src={require(`../../shared/Icon/${icon}`)} alt='' />
      </div>
      <p className='card_title'>{cardName}</p>
      <p className='card_text'>{cardInfo}</p>
      <button className='card_btn'>
        {btnName}
        <FontAwesomeIcon icon={faPlus} className='card_btn_icon' />
        {/* <img src={require("../../shared/Icon/plus.png")} alt="" /> */}
      </button>
    </div>
  );
};

export default Card;
