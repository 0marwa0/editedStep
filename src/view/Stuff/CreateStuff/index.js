/** @format */

import React from "react";
import "./index.css";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
const options = [
  { value: "pd", label: "pd" },
  { value: "admin", label: "admin" },
  { value: "support", label: "support" },
];

class index extends React.Component {
  state = {
    selectedOption: this.props.stuffType,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Option selected:`, selectedOption);
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
      placeholder: (defaultStyles) => {
        return {
          ...defaultStyles,
          color: "rgb(201, 198, 198)",
        };
      },
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = "all 300ms";

        return { ...provided, opacity, transition };
      },
    };
    const { selectedOption } = this.state;
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
          <div className={"input_wrapper space_wrapper"}>
            <p>Employee name</p>
            <span className='input_border'>
              <input
                type='text'
                width='100%'
                placeholder='Mohammed'
                onChange={(e) => this.props.handelInputChange(e, "name")}
                // placeholder='name'
              />
            </span>
          </div>
          <div className='input_wrapper space_wrapper'>
            <p>Phone number</p>
            <span className='input_border '>
              <input
                type='text'
                width='100%'
                placeholder='0778956136'
                onChange={(e) => this.props.handelInputChange(e, "phone")}
                // placeholder='0780123567'
              />
            </span>
          </div>
          {/* </div>
        <div className='two_col_flex paddingTop'> */}
          <div className='input_wrapper space_wrapper'>
            <p>E-mail</p>
            <span className='input_border'>
              <input
                placeholder='Mohammed@gmail.com'
                type='text'
                onChange={(e) => this.props.handelInputChange(e, "email")}
                width='200px'
                // placeholder='email'
              />
            </span>
          </div>
          <div className='input_wrapper space_wrapper'>
            <p>Team</p>

            <span className='input_border'>
              <Select
                options={options}
                placeholder='Admin'
                defaultValue=''
                isSearchable={false}
                value={this.state.selectedOption}
                styles={selectStyle}
                onChange={this.props.handelSelect}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            </span>
          </div>
          <div className='input_wrapper space_wrapper'>
            <p>Birth year </p>
            <span className='input_border'>
              <input
                type='text'
                onChange={(e) => this.props.handelInputChange(e, "birthday")}
                placeholder='1999'
              />
            </span>
          </div>{" "}
          <div className='input_wrapper space_wrapper'>
            <p>Location</p>
            <span className='input_border'>
              <input
                type='text'
                placeholder='Babylon'
                onChange={(e) => this.props.handelInputChange(e, "location")}
                // placeholder='lorem'
              />
            </span>
          </div>
          <div
            className={
              this.props.isMatch
                ? "input_wrapper space_wrapper"
                : "space_wrapper input_error"
            }>
            {" "}
            <p>password</p>
            <span className='input_border'>
              <input
                type='password'
                onChange={(e) => this.props.handelPassword(e, "password")}
                width='200px'
                placeholder='******'
              />
              <p className='errorMsg'></p>
            </span>
          </div>
          <div
            className={
              this.props.isMatch
                ? "input_wrapper space_wrapper"
                : "space_wrapper input_error"
            }>
            <p>Confirm password</p>
            <span className='input_border'>
              <input
                type='password'
                width='100%'
                onChange={(e) => this.props.handelPassword(e, "rePassword")}
                placeholder='Re write the same password'
              />
              <p className='errorMsg'>{this.props.errorMsg}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
