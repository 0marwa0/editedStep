/** @format */

import React, { Component } from "react";

import Header from "../../shared/header";

import ListItem from "./List_stuff_item.js";
import "../../App.css";
import { Stuff } from "../../fakeData";
import ListHead from "../../shared/List/List_head";
import "../../shared/List/index.css";
import StuffFilter from "./StuffFilter";
import EditPassword from "./EditPassword";
import Modal from "../../shared/Modal";
import ListFooter from "../../shared/List/List_footer";
import EditStuff from "./EditStuff";
import API, { addData } from "../../API/index";
import Loader from "react-loader-spinner";
import { loadData, editData, removeItem, removeItems } from "../../API/";
import { ToastContainer, toast } from "react-toastify";
import {
  RejectToast,
  ErrorToast,
  SuccessToast,
} from "../../API/ToastErrorHandle";
//import Stuff from "../../API/middleware/Stuff/index";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditPassword: false,
      DisplayEditModel: false,
      ShowDeleteModal: false,
      Data: [],
      checkedAll: false,
      currentPage: 1,
      pagePerOnce: 4,
      isLoading: false,
      pageNumber: 0,
      Stuff: [],
      id: "",
      isLoading: true,

      name: "",
      phone: "",
      email: "",
      nameError: false,
      location: "",
      birthday: "",
      type: "pd",

      editedData: {
        name: "",
        phone: "",
        email: "",
        location: "",
        birthday: "",
        type: "",
      },
      password: "",
      rePassword: "",
      passwordError: "",
      isMatch: true,
    };
  }
  showEditPassword = (showEditPassword) => {
    this.setState({ showEditPassword });
  };
  DisplayEditModel = (DisplayEditModel) => {
    this.setState({ DisplayEditModel });
  };
  checked = (e, item) => {
    if (e.target.checked) {
      this.setState({
        Data: this.state.Data.concat([item]),
      });
      if (this.state.Data.length === this.state.Stuff.length - 1) {
        this.setState({
          checkedAll: true,
        });
      }
    } else {
      this.setState({ checkedAll: false });
      this.setState({
        Data: this.state.Data.filter(function (val) {
          return val !== item;
        }),
      });
    }
  };
  isSelected = (id) => {
    let checked = this.state.Data.some((item) => item.id == id);

    return checked;
  };
  SelectAll = (e) => {
    let selected = e.target.checked;

    if (selected) {
      this.setState({
        Data: this.state.Stuff,
        checkedAll: true,
      });
    } else {
      this.setState({
        Data: [],
        checkedAll: false,
      });
    }
  };
  prevPage = () => {
    const currentPage = this.state.currentPage;
    if (currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  nextPage = () => {
    const currentPage = this.state.currentPage;
    const totalPge = Math.ceil(
      this.state.Stuff.length / this.state.pagePerOnce
    );
    if (currentPage != totalPge) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };
  getData = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false, Stuff: Stuff });
    }, 1200);

    // loadData(
    //   "admins",
    //   (errMsg, data) => {
    //     if (data.status) {
    //       this.setState({ isLoading: false });
    //       // console.log(data, "admin");
    //       for (let i = 0; i < data.admins.length; i++) {
    //         this.setState({ Stuff: data.admins[0] });
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
    // if (!localStorage.getItem("step_token")) this.props.history.push("/");
    this.getData();
  }
  handelInputChange = (event, key) => {
    let value = event.target.value;
    switch (key) {
      case "name":
        this.setState({ name: value });

        break;
      case "phone":
        this.setState({ phone: value });

        break;

      case "email":
        this.setState({ email: value });

        break;
      case "birthday":
        this.setState({ birthday: value });

        break;
      case "location":
        this.setState({ location: value });

        break;

      default:
        break;
    }
  };
  handelEditChange = (event, key) => {
    let value = event.target.value;
    let editedData = this.state.editedData;
    editedData[key] = value;
    this.setState({ editedData });
  };
  isValid = (data) => {
    let result = true;
    for (let key in data) {
      if (data[key] === "") {
        result = false;
      }
    }
    return result;
  };
  handelCreateStuff = (callback) => {
    this.setState({ isLoading: true });
    let data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      location: this.state.location,
      birthday: this.state.birthday,
      type: this.state.type,
      password: this.state.password,
    };
    if (this.isValid(data)) {
      if (this.passwordMatch()) {
        // addData("admin", data, (errMsg, data) => {
        //   this.getData();

        this.setState({ isLoading: false });
        //   if (data.status) {
        callback();
        SuccessToast("Added Successfully");
        //   } else {
        //     ErrorToast(errMsg);
        //     this.setState({ isLoading: false });
        //   }
        // });
      } else {
        this.setState({
          passwordError: "Password doesn't match",
          isMatch: false,
          isLoading: false,
        });
      }
    } else {
      ErrorToast("Empty field");
      this.setState({ isLoading: false });
    }
  };
  getId = (id) => {
    this.setState({ id });
  };
  passwordMatch = () => {
    let password = this.state.password;
    let rePassword = this.state.rePassword;
    return password === rePassword;
  };
  EditPassword = (callback) => {
    let id = this.state.id;

    this.setState({ isLoading: true });
    if (this.passwordMatch()) {
      editData(
        "admin",
        { password: this.state.password },
        id,
        (errMsg, data) => {
          this.setState({ isLoading: false, Data: [], password: "" });
          this.getData();
          callback();
          this.setState({ isLoading: false });
          if (data.status) {
            SuccessToast("Edited Successfully");
          } else {
            ErrorToast(errMsg);
            this.setState({ isLoading: false });
          }
        },

        (errMsg) => {
          RejectToast(errMsg);
        }
      );
    } else {
      this.setState({
        passwordError: "Password doesn't match",
        isMatch: false,
      });
    }
  };

  handelEditStuff = (callback) => {
    let id;
    let data = this.state.Data;
    let editableData = this.state.editedData;
    for (let key in editableData) {
      if (editableData[key] === "") {
        delete editableData[key];
      }
    }
    this.setState({ isLoading: true });
    if (data.length === 1) {
      data.map((i) => (id = i.id));
    }

    editData(
      "admin",
      editableData,
      id,
      (errMsg, data) => {
        this.setState({ isLoading: false, Data: [] });

        this.getData();
        callback();

        this.setState({ isLoading: false });
        if (data.status) {
          SuccessToast("Edited Successfully");
        } else {
          ErrorToast(errMsg);
          this.setState({ isLoading: false });
        }
      },

      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  handelPassword = (event, key) => {
    if (key === "password")
      this.setState({
        password: event.target.value,
        isMatch: true,
        passwordError: "",
      });
    if (key == "rePassword")
      this.setState({
        rePassword: event.target.value,
        isMatch: true,
        passwordError: "",
      });
  };
  handelDelete = (callback) => {
    let id;
    let data = this.state.Data;

    this.setState({ isLoading: true });
    if (data.length === 1) {
      data.map((i) => (id = i.id));
      SuccessToast("Deleted Successfully");
      this.setState({ isLoading: false, Data: [] });
      // removeItem(
      //   "admin",
      //   id,
      //   (errMsg, data) => {
      //     this.setState({ isLoading: false, Data: [] });
      //     this.getData();
      //     callback();
      //     this.setState({
      //       isLoading: false,
      //     });
      //     if (data.status) {
      //       SuccessToast("Deleted Successfully");
      //     } else {
      //       ErrorToast(errMsg);
      //     }
      //   },
      //   (errMsg) => {
      //     RejectToast(errMsg);
      //     this.setState({
      //       isLoading: false,
      //     });
      //   }
      // );
    } else {
      id = data.map((i) => i.id);
      SuccessToast("Deleted Successfully");
      this.setState({ isLoading: false, Data: [] });

      // removeItems(
      //   "admins",
      //   { ids: id },
      //   (errMsg, data) => {
      //     this.setState({ isLoading: false, Data: [] });
      //     this.getData();
      //     callback();
      //     this.setState({
      //       isLoading: false,
      //     });
      //     if (data.status) {
      //       SuccessToast("Deleted Successfully");
      //     } else {
      //       ErrorToast(errMsg);
      //     }
      //   },
      //   (errMsg) => {
      //     RejectToast(errMsg);
      //   }
      // );
    }
  };
  closeCreateModal = () => {
    this.setState({ isLoading: false });
  };
  handelSelect = (event) => {
    let value = event.label;

    this.setState({ type: value, stuffType: { value: value, label: value } });
  };
  whenClose = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      nameError: false,
      location: "",
      birthday: "",
      type: "pd",

      editedData: {
        name: "",
        phone: "",
        email: "",
        location: "",
        birthday: "",
        type: "",
      },
      password: "",
      rePassword: "",
      passwordError: "",
      isMatch: true,
    });
  };
  render() {
    const indexOfLastPage = this.state.currentPage * this.state.pagePerOnce;
    const indexOfFirstPage = indexOfLastPage - this.state.pagePerOnce;
    const CurrentStuff = this.state.Stuff.slice(
      indexOfFirstPage,
      indexOfLastPage
    );
    const totalPageNumber = Math.ceil(
      this.state.Stuff.length / this.state.pagePerOnce
    );
    // let editableData = ;
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
        <Header slug='Stuff list' />
        <div className='container'>
          <StuffFilter
            selectedData={this.state.Data}
            isLoading={this.state.isLoading}
            handelDelete={this.handelDelete}
            handelInputChange={this.handelInputChange}
            handelCreateStuff={this.handelCreateStuff}
            closeCreateModal={this.closeCreateModal}
            handelSelect={this.handelSelect}
            errorMsg={this.state.passwordError}
            isMatch={this.state.isMatch}
            nameError={this.state.nameError}
            handelPassword={this.handelPassword}
            stuffType={this.state.stuffType}
            whenClose={this.whenClose}
            DisplayEditModel={() => this.DisplayEditModel(true)}
          />
          <div className='List_Wrapper'>
            <ListHead
              listName='Stuff'
              SelectAll={this.SelectAll}
              isLoading={this.state.isLoading}
              style='stuffItem'
              checkedAll={this.state.checkedAll}
              fieldsName={[
                "Email",
                "Phone Number",
                "Birthday",
                "Team",
                "Location",
              ]}
            />
            {this.state.isLoading ? (
              <div className='loader_wrapper'>
                <Loader
                  type='ThreeDots'
                  color='var(--blue)'
                  height={100}
                  width={100}
                />
              </div>
            ) : (
              <div>
                {CurrentStuff.map((item, i) => {
                  return (
                    <ListItem
                      key={i}
                      listName='stuff'
                      style='stuffItem'
                      isLoading={this.state.isLoading}
                      itemName={item.name}
                      className={
                        this.isSelected(item.id)
                          ? "List_item selected_Item"
                          : "List_item"
                      }
                      itemNumber={i + 1}
                      email={item.email}
                      showModal={() => {
                        this.showEditPassword(true);
                        this.getId(item.id);
                      }}
                      phone={item.phone}
                      birthday={item.birthday.slice(0, 4)}
                      location={item.location}
                      team={item.type}
                      onChange={(e) => this.checked(e, item)}
                      checked={this.isSelected(item.id) ? true : ""}
                    />
                  );
                })}
              </div>
            )}
            <ListFooter
              currentPage={this.state.currentPage}
              searchResult={this.state.Stuff.length}
              prevPage={this.prevPage}
              nextPage={this.nextPage}
              totalPageNumber={totalPageNumber}
            />
          </div>{" "}
          {this.state.showEditPassword ? (
            <Modal
              modalButton='Re-new password'
              modalPurpose=' '
              modalTitle='Re-new password'
              width='40%'
              height='60%'
              fun={this.EditPassword}
              size='sm'
              onCLose={() => {
                this.showEditPassword(false);
                this.setState({ isLoading: false });
                this.whenClose();
              }}>
              <EditPassword
                data={this.state.Data}
                errorMsg={this.state.passwordError}
                isMatch={this.state.isMatch}
                nameError={this.state.nameError}
                handelPassword={this.handelPassword}
              />
            </Modal>
          ) : null}
          {this.state.DisplayEditModel ? (
            <Modal
              modalButton='Save edit'
              modalPurpose=' '
              modalTitle='Edit team member'
              width='55%'
              height='60%'
              fun={this.handelEditStuff}
              onCLose={() => {
                this.DisplayEditModel(false);
                this.setState({ isLoading: false });
                this.whenClose();
              }}>
              <EditStuff
                data={this.state.Data}
                handelInputChange={this.handelEditChange}
              />
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default index;
