/** @format */

import React from "react";
import "./index.css";
import Select from "react-select";
const options = [
  { value: "pd", label: "pd" },
  { value: "admin", label: "admin" },
  { value: "support", label: "support" },
];
class index extends React.Component {
  state = {
    selectedOption: { value: "pd", label: " pd" },
  };
  componentDidMount() {}
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
    let email = this.props.data.map((i) => i.email);
    let phone = this.props.data.map((i) => i.phone);
    let location = this.props.data.map((i) => i.location);
    let type = this.props.data.map((i) => i.type);
    let birthday = this.props.data.map((i) => i.birthday);
    console.log(this.props.data, "suffe old onse");
    return (
      <div>
        <div className='two_col_flex paddingTop'>
          <div className='input_wrapper space_wrapper'>
            <p>Employee name</p>
            <span className='input_border'>
              <input
                type='text'
                width='100%'
                defaultValue={name}
                onChange={(e) => this.props.handelInputChange(e, "name")}
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
                onChange={(e) => this.props.handelInputChange(e, "phone")}
              />
            </span>
          </div>
        </div>
        <div className='two_col_flex paddingTop'>
          <div className='input_wrapper space_wrapper'>
            <p>E-mail</p>
            <span className='input_border'>
              <input
                type='text'
                defaultValue={email}
                onChange={(e) => this.props.handelInputChange(e, "email")}
                width='200px'
              />
            </span>
          </div>
          <div className='input_wrapper space_wrapper'>
            <p>Team</p>
            <span className='input_border'>
              <Select
                options={options}
                defaultValue=''
                isSearchable={false}
                defaultValue={[{ label: type, value: type }]}
                styles={selectStyle}
                // onChange={(e) => this.props.handelInputChange(e, "type")}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />

              {/* <input
              type='text'
              value={this.state.type}
              onChange={(e) => this.props.handelInputChange(e, "type")}
              placeholder='lorem'
            /> */}
            </span>
          </div>
          <div className='input_wrapper space_wrapper'>
            <p>Birth year </p>
            <span className='input_border'>
              <input
                type='text'
                defaultValue={birthday}
                onChange={(e) => this.props.handelInputChange(e, "birthday")}
              />
            </span>
          </div>{" "}
          <div className='input_wrapper space_wrapper'>
            <p>Location</p>
            <span className='input_border'>
              <input
                type='text'
                defaultValue={location}
                onChange={(e) => this.props.handelInputChange(e, "location")}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
