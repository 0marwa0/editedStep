/** @format */

import React from "react";
import ListItem from "../../shared/List/List_Item";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faLessThan,
  faUnlockAlt,
} from "@fortawesome/fontawesome-free-solid";
import "./index.css";
import { Products } from "../../fakeData/index";
import ListHead from "../../shared/List//List_head";
import ListType_item from "./ListType_item";
export const ProductSType_1 = () => {
  return (
    <div>
      <div className="List_Wrapper">
        <ListHead
          listName="Product"
          fieldsName={[
            "3rd stage category",
            "2nd stage category",
            "1st stage category",
            "Price",
          ]}
        />
        {Products.map((item, i) => {
          return (
            <ListItem
              listName="product"
              itemName={item.itemName}
              className={
                this.isSelected(item.id)
                  ? "List_item selected_Item"
                  : "List_item"
              }
              itemNumber={i + 1}
              type={item.type}
              mostOrder={item.mostOrder}
              orderValue={item.orderValue}
              ratingRate={item.ratingRate}
              onChange={(e) => this.checked(e, item)}
              checked={this.isSelected(item.id) ? true : ""}
            />
          );
        })}
      </div>
      <div className="List_footer">
        <p>the results of your search is 500 items out of 10,000 item </p>
        <div>
          <FontAwesomeIcon icon={faLessThan} className="icon" />
          <p>1/12</p> <FontAwesomeIcon icon={faGreaterThan} className="icon" />
        </div>
      </div>
    </div>
  );
};

export const ProductSType_2 = () => {
  return (
    <div className="">
      <div className="ListType_2_wrapper">
        {Products.map((item, i) => {
          return (
            <ListType_item
              title={item.itemName}
              head={item.orderValue}
              text={item.mostOrder}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};
