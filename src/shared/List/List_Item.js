/** @format */

import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IoMdImage } from "react-icons/io";
import { RiRoadMapLine } from "react-icons/ri";
import { BsLock } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

const ListItem = ({
  itemName,
  listName,
  price,
  itemNumber,
  type,
  mostOrder,
  orderValue,
  ratingRate,
  className,
  showModal,
  onSelect,
  onChange,
  checkboxValue,
  checked,
  style,
}) => {
  let id = `test${itemNumber}`;

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

      {listName != "customer" ? (
        <div>
          {listName == "product" ? (
            <IoMdImage className='Item_Icon' />
          ) : (
            <RiLockPasswordLine className='Item_Icon' onClick={showModal} />
          )}
        </div>
      ) : null}

      <span>{type}</span>

      <div>{mostOrder}</div>
      <div className={listName == "product" ? null : "order_ctrl"}>
        {orderValue}
      </div>
      {listName == "product" ? (
        <div className='order_ctrl'>{price}</div>
      ) : (
        <div className='rate_ctrl'>{ratingRate}</div>
      )}
    </div>
  );
};

export default ListItem;
