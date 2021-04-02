/** @format */

import React from "react";
import Select from "react-select";
import "./index.css";
import "../../App.css";
import { sub, group, categories } from "../../fakeData";
import { FiTrash } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";

import Loader from "react-loader-spinner";
import { removeItem, loadData } from "../../API/index";
import {
  ResponseToast,
  ResponseToastMsg,
  RejectToast,
  ErrorToast,
  SuccessToast,
} from "../../API/ToastErrorHandle";
import { RiErrorWarningLine } from "react-icons/ri";

const SideOptions = [
  { value: "categories", label: "Main Category" },
  { value: "groups", label: "Group" },
  { value: "subgroups", label: "Sub Group" },
];

class index extends React.Component {
  constructor() {
    super();
    this.state = {
      selectValue: { value: "categories", label: " Main Category" },
      groups: [],
      subgroups: [],
      categories: [],
      isLoading: true,
      showTooltip: false,
      itemId: "",
      itemView: "",
    };
  }

  onChange = (event) => {
    this.setState({ selectValue: event });
  };
  showTooltipModel = (showTooltip) => {
    this.setState({ showTooltip });
  };
  deleteItem = (id, value) => {
    this.setState({ isLoading: true });
    switch (value) {
      case "categories":
        // removeItem(
        //   "category",
        //   id,
        //   (errMsg, data) => {
        this.setState({ isLoading: false });
        this.showTooltipModel(false);
        //     this.getCategories();
        //     // callback();
        //     this.setState({
        //       isLoading: false,
        //     });
        //     if (data.status) {
        SuccessToast("Deleted Successfully");
        //     } else {
        //       ErrorToast(errMsg);
        //     }
        //   },
        //   (errMsg) => {
        //     RejectToast(errMsg);
        //   }
        // );

        break;
      case "groups":
        // removeItem(
        //   "group",
        //   id,
        //   (errMsg, data) => {
        this.setState({ isLoading: false });
        this.showTooltipModel(false);
        //     this.getGroups();
        //     // callback();
        //     this.setState({
        //       isLoading: false,
        //     });
        //     if (data.status) {
        SuccessToast("Deleted Successfully");
        //     } else {
        //       ErrorToast(errMsg);
        //     }
        //   },
        //   (errMsg) => {
        //     RejectToast(errMsg);
        //   }
        // );
        break;
      case "subgroups":
        // removeItem(
        //   "subgroup",
        //   id,
        //   (errMsg, data) => {
        this.setState({ isLoading: false });
        this.showTooltipModel(false);
        //     this.getSubgroups();
        //     // callback();
        //     this.setState({
        //       isLoading: false,
        //     });
        //     if (data.status) {
        SuccessToast("Deleted Successfully");
        //     } else {
        //       ErrorToast(errMsg);
        //     }
        //   },
        //   (errMsg) => {
        //     RejectToast(errMsg);
        //   }
        // );
        break;
      default:
        break;
    }
  };
  Display = (value) => {
    if (value == "categories") {
      return this.state.isLoading ? (
        <div className='sideNavLoader'>
          <Loader type='ThreeDots' color='blue' height={80} width={80} />
        </div>
      ) : (
        categories.map((item) => (
          <div className='sideNav_item'>
            <p>{item.name}</p>
            <FiTrash
              color='red'
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({
                  itemId: item.id,
                  itemView: value,
                  showTooltip: true,
                })
              }
            />
            {this.state.showTooltip && item.id === this.state.itemId ? (
              <div className='tooltip_container_nav' id='tool'>
                <div className='tooltip'>
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
                        onClick={() => this.deleteItem(item.id, value)}>
                        Yes
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))
      );
    }

    if (value == "groups") {
      return this.state.isLoading ? (
        <div className='sideNavLoader'>
          <Loader type='ThreeDots' color='blue' height={80} width={80} />
        </div>
      ) : (
        this.state.groups.map((item) => (
          <div className='sideNav_item'>
            <p>{item.name}</p>
            <FiTrash
              color='red'
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({
                  itemId: item.id,
                  itemView: value,
                  showTooltip: true,
                })
              }
            />
            {this.state.showTooltip && item.id === this.state.itemId ? (
              <div class='tooltip_container_nav'>
                <div
                  class='tooltip'
                  ref={(ToolNode) => (this.ToolNode = ToolNode)}>
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
                        onClick={() => this.deleteItem(item.id, value)}>
                        Yes
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))
      );
    }
    if (value == "subgroups") {
      return this.state.isLoading ? (
        <div className='sideNavLoader'>
          <Loader type='ThreeDots' color='blue' height={80} width={80} />
        </div>
      ) : (
        this.state.subgroups.map((item) => (
          <div className='sideNav_item'>
            <p>{item.name}</p>
            <FiTrash
              color='red'
              style={{ cursor: "pointer" }}
              onClick={() =>
                this.setState({
                  itemId: item.id,
                  itemView: value,
                  showTooltip: true,
                })
              }
            />

            {this.state.showTooltip && item.id === this.state.itemId ? (
              <div class='tooltip_container_nav'>
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
                        onClick={() => this.deleteItem(item.id, value)}>
                        Yes
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))
      );
    }
  };
  handleClose = (e) => {
    if (this.nods.contains(e.target)) {
      return;
    }
    this.props.DisplaySideNav(false);
    // console.log(this.nods, "out overlay");
  };

  getGroups = () => {
    setTimeout(() => {
      this.setState({ isLoading: false, groups: group });
    }, 1200);
    // loadData(
    //   "groups",
    //   (errMsg, data) => {
    //     if (data.status) {
    //       // console.log(data, "groups");
    //       for (let i = 0; i < data.groups.length; i++) {
    //         this.setState({ groups: data.groups[0] });
    //       }
    //     } else {
    //       RejectToast(errMsg);
    //     }
    //   },
    //   (errMsg) => {
    //     RejectToast(errMsg);
    //   }
    // );
  };

  getSubgroups = () => {
    setTimeout(() => {
      this.setState({ isLoading: false, subgroups: sub });
    }, 1200);
    // loadData(
    //   "subgroups",
    //   (errMsg, data) => {
    //     if (data.status) {
    //       // console.log(data, "subgroups");
    //       for (let i = 0; i < data.subgroups.length; i++) {
    //         this.setState({ subgroups: data.subgroups[0] });
    //       }
    //     } else {
    //       RejectToast(errMsg);
    //     }
    //   },
    //   (errMsg) => {
    //     RejectToast(errMsg);
    //   }
    // );
  };

  loader = () => (
    <div className='sideNavLoader'>
      <Loader type='ThreeDots' color='blue' height={80} width={80} />
    </div>
  );
  getCategories = () => {
    setTimeout(() => {
      this.setState({ isLoading: false, categories: categories });
    }, 1200);
    // loadData(
    //   "categories",
    //   (errMsg, data) => {
    //     if (data.status) {
    //       // console.log(data, "categories");
    //       this.setState({ isLoading: false });
    //       for (let i = 0; i < data.categories.length; i++) {
    //         this.setState({ categories: data.categories[0] });
    //       }
    //     } else {
    //       RejectToast(errMsg);
    //     }
    //   },
    //   (errMsg) => {
    //     RejectToast(errMsg);
    //   }
    // );
  };
  componentDidMount() {
    this.getGroups();
    this.getSubgroups();
    this.getCategories();
  }
  render() {
    let customStyles = {
      menu: (styles) => ({
        ...styles,
        width: "9em",
        borderRadius: 6,
      }),

      option: (provided, state) => ({
        ...provided,
        "&:hover": {
          backgroundColor: state.isSelected
            ? "rgb(230, 247, 255)"
            : "var(--lighter-gray)",
        },
        // "&::before": {
        //   content: "sfsfsl",
        //   display: "inline-block",
        //   width: "30px",
        //   height: "30px",
        //   border: "2px solid teal",
        //   background: "royalblue",

        //   margin: "15px 15px 0 15px",
        //   color: "teal",
        // },
        width: "100%",
        // height: "1.5em",
        fontSize: "14px",
        color: "black",
        backgroundColor: state.isSelected ? "rgb(230, 247, 255)" : "",

        padding: 10,
      }),
      control: () => ({
        width: "10em",
        display: "flex",
        cursor: "pointer",
        fontSize: "14px",
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "all 300ms";

        return { ...provided, opacity, transition };
      },
    };

    return (
      <div onClick={(e) => this.handleClose(e)} className='SideOverlay'>
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
        <div
          className={this.props.isLoading ? "SideModal loading" : "SideModal"}
          ref={(nods) => {
            this.nods = nods;
          }}>
          <div className='Modal_inner_header'>
            <Select
              options={SideOptions}
              defaultValue='Main Group'
              value={this.state.selectValue}
              styles={customStyles}
              onChange={this.onChange}
              components={{
                IndicatorSeparator: () => null,
              }}
            />

            <div className='input_wrapper'>
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
          </div>

          <div className='Modal_inner_content'>
            <div className='sideNav_content'>
              {this.Display(this.state.selectValue.value)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
