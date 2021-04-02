/** @format */
import { addData } from "../../API/index.js";
import React, { Component } from "react";
import "./index.css";
import { FaEye, FaSpinner } from "react-icons/fa";
import { AiOutlineMail, AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import Loader from "react-loader-spinner";
import { BsLock } from "react-icons/bs";
import { NotificationManager } from "react-notifications";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  RejectToast,
  ErrorToast,
  SuccessToast,
} from "../../API/ToastErrorHandle.js";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },
      isLoading: false,
      isLogin: false,
      errorMsg: "",
      email: "",
      password: "",
      errors: { email: "", password: "" },
    };
  }

  handleEmailChange = (event) => {
    let value = event.target.value;
    let data = this.state.data;
    this.setState({ email: "" });
    data["email"] = value;
    if (data["email"].length == 0) {
      this.setState({ email: "Please enter your email!" });
    }
    this.setState({ data });
  };

  handlePasswordChange = (event) => {
    let value = event.target.value;
    let data = this.state.data;
    this.setState({ password: "" });
    data["password"] = value;
    if (data["password"].length == 0) {
      this.setState({ password: "Please enter your password!" });
    }
    this.setState({ data });
  };

  handleChange(event, key) {}
  onSubmit = (e) => {
    let loginData = this.state.data;
    e.preventDefault();

    if (this.state.data.email != 0 && this.state.data.password != 0) {
      this.setState({ isLoading: true });
      this.props.Login(
        loginData,
        (status, errMsg, data) => {
          if (data.status) {
            this.setState({ isLogin: true, isLoading: false });
            this.props.history.push("/dashboard");
            console.log(data.status, "status");

            SuccessToast("Login Successful");
          } else {
            this.setState({ isLoading: false });
            ErrorToast(data.errMsg);
            this.props.history.push("/");
          }
        },
        (errMsg) => {
          RejectToast(errMsg);
        }
      );
    } else {
      if (this.state.data.email.length === 0)
        this.setState({ email: "Please enter your email!" });
      if (this.state.data.password.length === 0)
        this.setState({ password: "Please enter your password!" });
    }
    if (localStorage.getItem("step_token"))
      this.props.history.push("/dashboard");
  };
  componentDidUpdate() {
    if (localStorage.getItem("step_token")) {
      this.props.history.push("/dashboard");
    }
  }
  componentDidMount() {
    if (localStorage.getItem("step_token")) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        <div className='login_page'>
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
            <div
              className={
                this.state.email == "" ? "input_wrapper" : "input_error"
              }>
              <div className='login_input'>
                <input
                  type='text'
                  placeholder='Username'
                  onChange={(e) => this.handleEmailChange(e)}
                />
                <AiOutlineUser
                  className='login_icon'
                  color={this.state.email == "" ? "" : "red"}
                />
              </div>
              <p className='errorMsg'>{this.state.email}</p>
            </div>
            <div
              className={
                this.state.password == "" ? "input_wrapper" : "input_error"
              }>
              <div className='login_input'>
                <BsLock
                  className='login_icon'
                  color={this.state.password == "" ? "" : "red"}
                />
                <input
                  type='password'
                  width='100%'
                  placeholder='Password'
                  onChange={(e) => this.handlePasswordChange(e)}
                />
              </div>
              <p className='errorMsg'>{this.state.password}</p>
            </div>

            <button
              disabled={this.state.isLoading ? true : false}
              className={
                this.state.isLoading ? "btn btn_ctrl loading" : "btn btn_ctrl"
              }
              onClick={this.onSubmit}>
              <div className='login_btn'>
                {this.state.isLoading ? (
                  <Loader type='Oval' color='white' height={15} width={15} />
                ) : null}{" "}
                Log in
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
