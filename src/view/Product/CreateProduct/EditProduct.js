/** @format */
import React from "react";
import Modal from "../../../shared/Modal";
import { FaPlus, FaMinus } from "react-icons/fa";

import Select, { components } from "react-select";
import { CreateComponent } from "./CreatModel";
import { ToastContainer, toast } from "react-toastify";

class index extends React.Component {
  state = {
    showAddComponent: false,

    // price: this.props.data.map((i) => i.price) || 0,
  };
  DisplayAddComponent = (showAddComponent) => {
    this.setState({ showAddComponent });
  };
  render() {
    let selectStyle = {
      menu: (styles) => ({ ...styles, width: "100%", borderRadius: 6 }),

      option: (provided, state) => ({
        ...provided,
        "&:hover": {
          backgroundColor: state.isSelected
            ? "rgb(230, 247, 255)"
            : "var(--lighter-gray)",
        },
        width: "100%",
        // height: "1.5em",
        fontSize: "14px",
        color: "black",
        backgroundColor: state.isSelected ? "rgb(230, 247, 255)" : "",

        padding: 10,
      }),
      control: (base, state) => ({
        ...base,
        width: "100%",
        display: "flex",
        height: "37px",
        cursor: "pointer",
        fontSize: "14px",
        borderRadius: "4px",
        border: "1px solid var(--light-gray) !important",
        // This line disable the blue border
        boxShadow: state.isFocused
          ? "0 0 3px rgba(113, 218, 247, 1) !important"
          : "",
        "&:hover": {
          border: state.isFocused
            ? "0 0 3px rgba(113, 218, 247, 1) !important"
            : "",
        },
      }),
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "all 300ms";

        return { ...provided, opacity, transition };
      },
    };
    let name = this.props.data.map((i) => i.name);
    let price = this.props.data.map((i) => i.price);
    let components = this.props.data.map((i) => i.components) || [];
    let value;
    for (let i = 0; i < components.length; i++) {
      value = components[0];
    }
    let defaultComponents = this.props.components.map((item) => {
      return { value: item.name, label: item.name };
    });

    let componentsValue = value
      ? value.map((item) => {
          return { value: item.name, label: item.name };
        })
      : [];
    const options = defaultComponents;
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
        <div className='two_col_flex paddingTop'>
          <div className='input_wrapper space_wrapper'>
            <p>Product name</p>
            <span className='input_border'>
              <input
                type='text'
                width='100%'
                placeholder='S type calvicle'
                defaultValue={name}
                onChange={(e) => this.props.handEditChange(e, "name")}
              />
            </span>
          </div>
          <div className='input_wrapper space_wrapper'>
            <p>Price</p>

            <span className='input_border '>
              <div className='input_number'>
                <input
                  type='number'
                  min='0'
                  placeholder='$ 1,000'
                  width='100%'
                  defaultValue={price}
                  onChange={(e) => this.props.handEditChange(e, "price")}
                />
                <span style={{ pointerEvents: "none" }}>
                  <div className='input_arrows'>
                    <span>
                      <FaPlus size='10' />
                    </span>
                    <span>
                      <FaMinus size='10' />
                    </span>
                  </div>
                </span>
              </div>
            </span>
          </div>
        </div>{" "}
        <div className='input_wrapper space_wrapper'>
          <p>Components</p>
          <span className='input_border'>
            <Select
              components={{
                // Option: ComponentOption,
                IndicatorSeparator: () => null,
              }}
              options={options}
              escapeClearsValue={components}
              isSearchable={false}
              styles={selectStyle}
              isMulti={true}
              defaultValue={componentsValue}
              DisplayAddComponent={this.DisplayAddComponent}
              onChange={(e) => this.props.handelEditComponent(e)}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default index;
