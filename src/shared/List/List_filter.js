/** @format */

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFilter,
  faSortDown,
} from "@fortawesome/fontawesome-free-solid";
import { RiFilter2Line, RiErrorWarningLine } from "react-icons/ri";
import { FaSortDown, FaEdit, FaImage } from "react-icons/fa";
import { FaThList, FaBuromobelexperte } from "react-icons/fa";
import { removeItem } from "../../API/index";
import { FiEdit } from "react-icons/fi";
import Loader from "react-loader-spinner";

import { GiHamburgerMenu } from "react-icons/gi";
import "../../App.css";
class ListFilter extends React.Component {
  state = {
    showTooltip: false,
    selectedData: this.props.selectedData,
  };

  showTooltipModel = (showTooltip) => {
    this.setState({ showTooltip });
  };

  onDelete = () => {
    this.props.handelDelete(() => {
      this.showTooltipModel(false);
    });
  };

  render() {
    return (
      <div>
        <div className='List_filter'>
          <span className='filter_holder'>
            <div
              className={
                this.props.isLoading ? "input_wrapper loading" : "input_wrapper"
              }>
              <div>
                <input type='text' placeholder='Search for something ...' />
                {this.props.isLoading ? (
                  <div className='input_icon'>
                    <Loader type='Oval' color='black' height={15} width={15} />
                  </div>
                ) : (
                  <img
                    src={require("../../shared/Icon/searchIcon.png")}
                    height='13px'
                    className='input_icon'
                  />
                )}
              </div>
            </div>
            <div
              className={
                this.props.isLoading ? "Filter_ctrl loading" : "Filter_ctrl"
              }>
              <RiFilter2Line
                style={{
                  margin: "0 4px",

                  fontSize: "15px",
                }}
              />
              <p> Filter</p>
              <FaSortDown
                style={{
                  fontSize: "8px",
                  margin: "0 4px",
                  color: "var(--light-gray)",
                }}
              />
            </div>{" "}
            <div className='btns_holder'>
              {this.props.selectedData.length != 0 ? (
                <div>
                  {this.state.showTooltip ? (
                    <div class='tooltip_container'>
                      <div class='tooltip'>
                        <div className='tooltip_content'>
                          <span>
                            <RiErrorWarningLine className='warning_icon' />
                            Are you sure to delete this item ?
                          </span>

                          <span>
                            <button
                              className='btn btn_Edit'
                              onClick={() => this.showTooltipModel(false)}>
                              No
                            </button>
                            <button
                              className='btn btn_ctrl'
                              onClick={() =>
                                this.props.selectedData.length > 1 &&
                                this.props.ListName == "customer"
                                  ? this.showTooltipModel(false)
                                  : this.onDelete()
                              }>
                              Yes
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <button
                    className='btn btn_delete'
                    onClick={
                      this.props.ListName != "customer"
                        ? () => this.showTooltipModel(true)
                        : this.props.selectedData.length > 1
                        ? () => this.showTooltipModel(true)
                        : this.props.DeleteModal
                    }>
                    Delete {this.props.selectedData.length} item
                  </button>
                </div>
              ) : null}
              {this.props.selectedData.length == 1 ? (
                <div>
                  <button
                    className='btn btn_Edit'
                    onClick={this.props.DisplayEditModel}>
                    <FaEdit className='plus_icon' />
                    {this.props.selectedData.map((item) => item.name)}
                  </button>
                </div>
              ) : null}
              {this.props.selectedData.length == 1 &&
              this.props.ListName == "product" ? (
                <div>
                  <button
                    className='btn btn_Edit'
                    onClick={this.props.DisplayUploadModel}>
                    <FaImage className='plus_icon' />
                    change image
                  </button>
                </div>
              ) : null}
              <div className='btn_holder'>
                <button
                  className={
                    this.props.isLoading
                      ? "btn_ctrl btn loading"
                      : "btn_ctrl btn"
                  }
                  disabled={this.props.isLoading ? true : false}
                  onClick={this.props.showModal}>
                  <span>
                    <FontAwesomeIcon icon={faPlus} className='plus_icon' />
                  </span>
                  <span>Add</span>
                </button>
              </div>
              {this.props.ListName == "product" ? (
                <div className='list_type_wrapper'>
                  <FaThList
                    className={
                      this.props.list ? "list_type activeList" : "list_type "
                    }
                    onClick={() => {
                      this.props.listActive(true);
                      this.props.burgerActive(false);
                    }}
                  />{" "}
                  <FaBuromobelexperte
                    className={
                      this.props.burger ? "list_type activeList" : "list_type "
                    }
                    onClick={() => {
                      this.props.listActive(false);
                      this.props.burgerActive(true);
                    }}
                  />
                </div>
              ) : null}
            </div>
          </span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default ListFilter;
