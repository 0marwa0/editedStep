/** @format */

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../shared/Modal/index";
import { IoMdImage } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";
import MostOrder from "./MostOrder";
const ListItem = ({
  itemName,

  itemNumber,
  ratingRate,
  mostOrder,
  orderValue,
  phone,
  className,
  showModal,
  onSelect,
  onChange,
  degree,
  specialty,
  checkboxValue,
  checked,
  style,
}) => {
  let id = `test${itemNumber}`;
  const [showOrder, setShowModelOrder] = useState(false);
  const showModelOrder = (show) => {
    setShowModelOrder(show);
  };
  return (
    <div className={`${className}${" "} ${style}`}>
      <div>
        <input
          type='checkbox'
          id={id}
          checked={checked}
          onChange={onChange}
          value={checkboxValue}
        />
        <label htmlFor={id}></label>
      </div>
      <div>{itemNumber}</div>

      <div>{itemName}</div>

      <div>
        <FiPhoneCall className='stuff_icon' />
        {phone}
      </div>
      <div>{specialty}</div>
      <div>{degree}</div>
      <div className='mostOrder_ctrl' onClick={() => showModelOrder(true)}>
        {mostOrder} Orders
      </div>
      <div className='order_ctrl'>{orderValue}</div>

      <div className='rate_ctrl'>{ratingRate}</div>
      {showOrder ? (
        <Modal
          modalPurpose=''
          modalTitle='Most Order Kit'
          width='60%'
          height='40%'
          container={true}
          footer={true}
          show={true}
          //  fun={}
          onCLose={() => {
            showModelOrder(false);
          }}>
          <MostOrder />
        </Modal>
      ) : null}
    </div>
  );
};

export default ListItem;
