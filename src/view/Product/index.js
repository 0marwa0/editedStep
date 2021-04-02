/** @format */
import React, { Component } from "react";
import ListFilter from "../../shared/List/List_filter";
import ListFooter from "../../shared/List/List_footer";
import Loader from "react-loader-spinner";
import Header from "../../shared/header";
import "../../shared/List/index.css";
import "../../App.css";
import "./index.css";
import ProductFilter from "./ProductFilter";
import "../../shared/List/index.css";
import axios from "axios";
import CreateProduct from "./CreateProduct";
import EditProduct from "./CreateProduct/EditProduct";
import Modal from "../../shared/Modal";
import { Products } from "../../fakeData/";
import ListItem from "../../shared/List/List_Item";
import "../../App.css";
import API, { addProduct } from "../../API/index";
import "./index.css";

import { ToastContainer, toast } from "react-toastify";

import {
  ResponseToast,
  ResponseToastMsg,
  RejectToast,
  ErrorToast,
  SuccessToast,
} from "../../API/ToastErrorHandle";
// import { Customers } from "../../fakeData";
import {
  loadData,
  editData,
  addData,
  removeItem,
  removeItems,
  changeImage,
} from "../../API/";
import UploadImage from "././CreateProduct/UploadImage";
import ListHead from "../../shared/List//List_head";
import ListType_item from "./ListType_item";
import SideNav from "../../shared/SideModel/index.js";
import Category from "../../API/middleware/Category";
import SubGroup from "../../API/middleware/SubGroup";
import Group from "../../API/middleware/Groups";

export default class index extends React.Component {
  state = {
    showModel: false,
    showUploadModel: false,
    showEditModel: false,
    list: true,
    burger: false,
    showModel: false,
    Data: [],
    checkedAll: false,
    currentPage: 1,
    pagePerOnce: 4,
    isLoadingData: true,
    isLoading: true,
    pageNumber: 0,
    Products: [],
    showSideNav: false,
    category: [],
    groups: [],
    subgroups: [],
    components: [],
    itemName: "",
    ProductName: "",
    image: "",
    description: "",
    price: 0,
    subgroup: 0,
    component: [],
    componentData: {
      name: "",
      description: "",
      price: 0,
      size: "",
    },
    selectedSubGroup: [],
    selectedGroup: [],
    categoryId: "",
    subgroupId: "",
    categoryValue: "",
    groupValue: "",
    subgroupValue: "",
    isActive: false,
    Image: require("../../shared/Icon/upload.png"),
    allowToChange: false,
    DisableBtn: true,
    DisableMain: true,
    DisableSub: false,
    editedData: {
      name: "",
      price: 0,
      components: [],
    },
    showLoader1: false,
    showLoader2: false,
    isGroupSelected: true,
    isSubgroupSelected: true,
    ShowProgress: false,
  };

  checked = (e, item) => {
    if (e.target.checked) {
      this.setState({
        Data: this.state.Data.concat([item]),
      });
      if (this.state.Data.length === this.state.Products.length - 1) {
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
        Data: this.state.Products,
        checkedAll: true,
      });
    } else {
      this.setState({
        Data: [],
        checkedAll: false,
      });
    }
  };

  DisplayModel = (showModel) => {
    this.setState({ showModel });
  };
  DisplayUploadModel = (showUploadModel) => {
    this.setState({ showUploadModel });
  };
  DisplayEditModel = (showEditModel) => {
    this.setState({ showEditModel });
  };

  DisplaySideNav = (showSideNav) => {
    this.setState({ showSideNav });
  };
  listActive = (list) => {
    this.setState({ list });
  };
  burgerActive = (burger) => {
    this.setState({ burger });
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
      this.state.Products.length / this.state.pagePerOnce
    );
    if (currentPage != totalPge) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };
  handleImageChange = (event, key) => {
    let value = event.target.files[0];

    let imgSrc = URL.createObjectURL(event.target.files[0]);
    let data = this.state.data;
    this.setState({
      Image: imgSrc,
      allowToChange: true,
    });
    this.setState({ image: value });
    // console.log(event.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function () {
      // data[key] = reader.result;
    };
    // console.log(this.state.image, "image uploaded to the state");
  };
  removeImage = () => {
    this.Active(false);
    this.setState({
      Image: require("../../shared/Icon/upload.png"),
      allowToChange: false,
    });
  };

  Active = (isActive) => {
    this.setState({ isActive });
  };
  getData = () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false, Products: Products });
    }, 1200);
    // loadData(
    //   "products",
    //   (errMsg, data) => {
    //     if (data.status) {
    //       this.setState({ isLoading: false });
    //       // console.log(data, "products");
    //       for (let i = 0; i < data.products.length; i++) {
    //         this.setState({ Products: data.products[0] });
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
  getGroups = () => {
    loadData(
      "groups",
      (errMsg, data) => {
        if (data.status) {
          // console.log(data, "groups");
          for (let i = 0; i < data.groups.length; i++) {
            this.setState({ groups: data.groups[0] });
          }
        } else {
          RejectToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  getSubGroups = () => {
    loadData(
      "subgroups",
      (errMsg, data) => {
        if (data.status) {
          // console.log(data, "subgroups");
          for (let i = 0; i < data.subgroups.length; i++) {
            this.setState({ subgroups: data.subgroups[0] });
          }
        } else {
          RejectToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  getCategories = () => {
    loadData(
      "categories",
      (errMsg, data) => {
        if (data.status) {
          // console.log(data, "categories");
          this.setState({ isLoading: false });
          for (let i = 0; i < data.categories.length; i++) {
            this.setState({ categories: data.categories[0] });
          }
        } else {
          RejectToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  getComponents = () => {
    loadData(
      "components",
      (errMsg, data) => {
        if (data.status) {
          // console.log(data, "components");
          for (let i = 0; i < data.components.length; i++) {
            this.setState({ components: data.components[0] });
          }
        } else {
          RejectToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  componentDidMount() {
    // if (!localStorage.getItem("step_token")) this.props.history.push("/");
    this.getData();
    this.getCategories();
    this.getComponents();
  }
  isValid = (data) => {
    let result = true;
    for (let key in data) {
      if (data[key] === "") {
        result = false;
      }
    }
    return result;
  };
  handelCreateProduct = (callback) => {
    this.setState({ isLoading: true });
    let product = {
      name: this.state.ProductName,
      price: this.state.price,
      subgroup: this.state.subgroup,
      components: this.state.component,
      image: this.state.image,
    };
    this.setState({ ShowProgress: true });
    // console.log(product, "sended data");

    if (this.isValid(product)) {
      // addData(
      //   "product",
      //   product,
      //   (errMsg, data) => {
      this.setState({ isLoading: false });
      //     if (data.status) {
      callback();
      SuccessToast("Added Successfully");
      this.setState({
        image: "",
        allowToChange: false,
        ShowProgress: false,
        Image: require("../../shared/Icon/upload.png"),
      });
      this.Active(false);
      this.setState({ isLoading: false });
      //     } else {
      //       ErrorToast(errMsg);
      //       this.setState({ isLoading: false });
      //     }
      //   },
      //   (errMsg) => {
      //     RejectToast(errMsg);
      //     this.setState({ isLoading: false });
      //   }
      // );
    } else {
      ErrorToast("Empty field");
      this.setState({ isLoading: false });
    }
  };
  handelInputChange = (event, key) => {
    let value = event.target.value;
    if (key === "name") {
      this.setState({ ProductName: value });
    }
    if (key === "price") {
      this.setState({ price: value });
    }

    if (value.length === 0) {
      this.setState({ DisableMain: true });
    } else this.setState({ DisableMain: false });
  };

  handEditChange = (event, key) => {
    let editedData = this.state.editedData;
    let value = event.target.value;
    if (key === "price") {
      editedData.price = Number(value);
    }

    editedData[key] = value;
    this.setState({ editedData });
  };

  handelSubGroup = (event) => {
    let category,
      group,
      subgroup = "";
    let catValue = this.state.categoryValue;
    let groValue = this.state.groupValue;
    let subValue = event.value;
    this.state.selectedSubGroup
      .filter((i) => i.name === subValue)
      .map((i) => (subgroup = i));
    this.state.selectedGroup
      .filter((i) => i.name === groValue)
      .map((i) => (group = i));
    this.state.categories
      .filter((i) => i.name === catValue)
      .map((i) => (category = i));

    subgroup.group = group;
    subgroup.group.category = category;
    this.setState({ subgroup: subgroup.id, isSubgroupSelected: true });
  };

  handelComponent = (event) => {
    let names = [];
    let ids = [];
    let components = this.state.components;

    if (event) {
      event.map((i) => names.push(i.label));
    }
    if (names) {
      components.map((i) =>
        names.includes(i.name) ? ids.push(i.id) : (ids = ids)
      );
    }

    this.setState({ component: ids });
  };
  handelEditComponent = (event) => {
    let editData = this.state.editedData;
    let names = [];
    let ids = [];
    let components = this.state.components;

    if (event) {
      event.map((i) => names.push(i.label));
    }
    if (names) {
      components.map((i) =>
        names.includes(i.name) ? ids.push(i.id) : (ids = ids)
      );
    }

    editData["components"] = ids;
    this.setState({ editData });
  };

  addGroup = (callback) => {
    this.setState({ showLoader1: true });
    let data = { category: this.state.categoryId, name: this.state.itemName };
    addData(
      "group",
      data,
      (errMsg, data) => {
        callback();

        if (data.status) {
          SuccessToast("Added Successfully");
          let items = this.state.selectedGroup;
          items.push(data.group);
          this.setState({ selectedGroup: items });
          this.setState({ itemName: "" });
        } else {
          ErrorToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  addSubGroup = (callback) => {
    let data = { group: this.state.subgroupId, name: this.state.itemName };

    addData(
      "subgroup",
      data,
      (errMsg, data) => {
        callback();

        if (data.status) {
          this.setState({ itemName: "" });
          SuccessToast("Added Successfully");

          let items = this.state.selectedSubGroup;
          items.push(data.subgroup);
          this.setState({ selectedSubGroup: items });
        } else {
          ErrorToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  addCategory = (callback) => {
    let data = { name: this.state.itemName };

    addData(
      "category",
      data,
      (errMsg, data) => {
        callback();

        if (data.status) {
          this.setState({ itemName: "" });
          SuccessToast("Added Successfully");
          this.getCategories();
        } else {
          ErrorToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  addComponent = (callback) => {
    // console.log(this.state.componentData, "compoonet data sended");
    addData(
      "component",
      this.state.componentData,
      (errMsg, data) => {
        callback();

        if (data.status) {
          SuccessToast("Added Successfully");
          this.getComponents();
        } else {
          ErrorToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  dragEnter = (e) => {
    e.preventDefault();
  };
  dragLeave = (e) => {
    e.preventDefault();
    this.Active(false);
  };
  dragOver = (e) => {
    this.Active(true);
    e.preventDefault();
  };
  fileDrop = (e) => {
    e.preventDefault();
    let imgSrc = URL.createObjectURL(e.dataTransfer.files[0]);
    this.setState({
      Image: imgSrc,
      allowToChange: true,
      image: e.dataTransfer.files[0],
    });
    // console.log(e.dataTransfer.files[0], "file uploaded");
  };

  handelEditProduct = (callback) => {
    let id;
    let data = this.state.Data;
    let editedData = this.state.editedData;
    this.setState({ isLoading: true });
    if (data.length === 1) {
      data.map((i) => (id = i.id));
    }

    for (let key in editedData) {
      if (editedData[key] === "") {
        delete editedData[key];
      }
    }
    console.log(id, this.state.editedData, "product edited data");
    editData(
      "product",
      this.state.editedData,
      id,
      (errMsg, data) => {
        this.setState({ isLoading: false, Data: [] });
        callback();
        this.setState({ isLoading: false });
        if (data.status) {
          SuccessToast("Edited Successfully");
          this.getData();
        } else {
          ErrorToast(errMsg);
          this.setState({ isLoading: false });
        }
      },

      (errMsg) => {
        RejectToast(errMsg);
        this.setState({ isLoading: false });
      }
    );
  };
  editImage = (callback) => {
    let id;
    let data = this.state.Data;
    if (data.length === 1) {
      data.map((i) => (id = i.id));
      changeImage(
        "product",
        this.state.image,
        id,
        (errMsg, data) => {
          this.setState({ isLoading: false, Data: [] });

          callback();
          this.setState({ isLoading: false });
          if (data.status) {
            this.setState({
              image: "",
              allowToChange: false,
              Image: require("../../shared/Icon/upload.png"),
            });
            this.Active(false);
            SuccessToast("Edited Successfully");
            this.getData();
          } else {
            ErrorToast(errMsg);
          }
        },
        (errMsg) => {
          RejectToast(errMsg);
        }
      );
    }
  };
  handelDelete = (callback) => {
    let id;
    let data = this.state.Data;

    this.setState({ isLoading: true });
    if (data.length === 1) {
      data.map((i) => (id = i.id));
      this.setState({
        isLoading: false,
        Data: [],
      });
      SuccessToast("Deleted Successfully");
      // removeItem(
      //   "product",
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
      //   }
      // );
    } else {
      id = data.map((i) => i.id);
      // removeItems(
      //   "products",
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
      this.setState({
        isLoading: false,
        Data: [],
      });
      SuccessToast("Deleted Successfully");
    }
  };
  handelCategory = (event) => {
    let name = event.value;
    let categoryId = "";
    this.setState({ categoryValue: name, isGroupSelected: false });
    this.state.categories
      .filter((i) => name === i.name)
      .map((i) => {
        categoryId = i.id;
        this.setState({ categoryId });
      });
    this.setState({ showLoader1: true, validSupGroup: false });
    loadData(
      `category/groups/${categoryId}`,
      (errMsg, data) => {
        if (data.status) {
          this.setState({ isLoading: false });

          for (let i = 0; i < data.groups.length; i++) {
            let res = data.groups[0];
            this.setState({
              validGroup: true,
              showLoader1: false,
            });

            this.setState({ selectedGroup: res });
          }
        } else {
          RejectToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };

  handelGroup = (event) => {
    let name = event.value;
    let subgroupId = "";
    this.setState({
      groupValue: name,
      isGroupSelected: true,
      isSubgroupSelected: false,
    });
    this.state.selectedGroup
      .filter((i) => name === i.name)
      .map((i) => {
        subgroupId = i.id;
        this.setState({ subgroupId: i.id });
      });
    this.setState({ name, showLoader2: true });
    loadData(
      `group/subs/${subgroupId}`,
      (errMsg, data) => {
        if (data.status) {
          this.setState({
            isLoading: false,
            showLoader2: false,
            validSupGroup: true,
          });
          // console.log(data, "selected subgroup");
          for (let i = 0; i < data.subgroups.length; i++) {
            this.setState({ selectedSubGroup: data.subgroups[0] });
          }
        } else {
          RejectToast(errMsg);
        }
      },
      (errMsg) => {
        RejectToast(errMsg);
      }
    );
  };
  handelNameChange = (e) => {
    let itemName = e.target.value;

    this.setState({ itemName });
    if (itemName.length === 0) {
      this.setState({ DisableBtn: true });
    } else this.setState({ DisableBtn: false });
  };
  handelComponentChange = (e, key) => {
    let value = e.target.value;
    let componentData = this.state.componentData;
    componentData[key] = value;
    this.setState({ componentData });
    if (value.length === 0) {
      this.setState({ DisableBtn: true });
    } else this.setState({ DisableBtn: false });
  };
  DisplayCreateModel = () => {
    this.DisplayModel(false);
    this.whenClose();
  };

  whenClose = () => {
    this.setState({
      ProductName: "",
      image: "",
      description: "",
      price: 0,
      subgroup: 0,
      component: [],
      validSupGroup: false,
      validGroup: false,
    });
    let data = this.state.editedData;
    for (let key in data) {
      data[key] = "";
    }
    this.setState({ data });
    // console.log("state is clear", this.state.data);
  };
  render() {
    const ListName = "product";
    const indexOfLastPage = this.state.currentPage * this.state.pagePerOnce;
    const indexOfFirstPage = indexOfLastPage - this.state.pagePerOnce;
    const CurrentProducts = this.state.Products.slice(
      indexOfFirstPage,
      indexOfLastPage
    );
    let selectedGroup = this.state.selectedSubGroup;
    const totalPageNumber = Math.ceil(
      this.state.Products.length / this.state.pagePerOnce
    );
    // console.log(CurrentProducts, "current product");

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
        <Header
          slug='Products List'
          DisplaySideNav={() => this.DisplaySideNav(true)}
        />
        <div className='container'>
          <ListFilter
            selectedData={this.state.Data}
            showModal={() => this.DisplayModel(true)}
            ListName='product'
            list={this.state.list}
            handelDelete={this.handelDelete}
            burger={this.state.burger}
            isLoading={this.state.isLoading}
            listActive={this.listActive}
            burgerActive={this.burgerActive}
            DisplayUploadModel={() => this.DisplayUploadModel(true)}
            DisplayEditModel={() => this.DisplayEditModel(true)}>
            {this.state.list ? (
              <div className='page_content'>
                <div className='List_Wrapper'>
                  <ListHead
                    listName='Product'
                    SelectAll={this.SelectAll}
                    checkedAll={this.state.checkedAll}
                    style='productItem'
                    fieldsName={[
                      "3rd stage category",
                      "2nd stage category",
                      "1st stage category",
                      "Price",
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
                      {CurrentProducts.map((item, i) => {
                        return (
                          <ListItem
                            listName='product'
                            itemName={item.name}
                            style='productItem'
                            className={
                              this.isSelected(item.id)
                                ? "List_item selected_Item"
                                : "List_item"
                            }
                            itemNumber={i + 1}
                            key={i}
                            type={item.type}
                            mostOrder={item.subgroup}
                            orderValue={item.subgroup}
                            price={item.price + "$"}
                            onChange={(e) => this.checked(e, item)}
                            checked={this.isSelected(item.id) ? true : ""}
                          />
                        );
                      })}
                    </div>
                  )}

                  <ListFooter
                    currentPage={this.state.currentPage}
                    searchResult={this.state.Products.length}
                    prevPage={this.prevPage}
                    nextPage={this.nextPage}
                    totalPageNumber={totalPageNumber}
                  />
                </div>
              </div>
            ) : (
              <div className='ListType_2_wrapper'>
                {this.state.Products.map((item, i) => {
                  return (
                    <ListType_item
                      name={item.name}
                      key={i}
                      group={item.subgroup}
                      category={item.subgroup}
                      price={item.price + "$"}
                    />
                  );
                })}
              </div>
            )}
          </ListFilter>

          {this.state.showModel ? (
            <Modal
              modalButton='Create New Item'
              modalPurpose='From here you can add Products to your list'
              modalTitle='Add new Product'
              width='55%'
              height='100%'
              size='lg'
              DisableBtn={this.state.DisableMain}
              fun={this.handelCreateProduct}
              //
              onCLose={this.DisplayCreateModel}>
              <CreateProduct
                subgroups={this.state.selectedSubGroup}
                categories={this.state.categories}
                components={this.state.components}
                handelCategory={this.handelCategory}
                handelGroup={this.handelGroup}
                handelChange={this.handelComponentChange}
                DisableBtn={this.state.DisableBtn}
                DisableMain={this.state.DisableMain}
                DisableSub={this.state.DisableSub}
                handelSubGroup={this.handelSubGroup}
                handelComponent={this.handelComponent}
                handelInputChange={this.handelInputChange}
                handelNameChange={this.handelNameChange}
                addGroup={this.addGroup}
                showLoader1={this.state.showLoader1}
                showLoader2={this.state.showLoader2}
                isGroupSelected={this.state.isGroupSelected}
                isSubgroupSelected={this.state.isSubgroupSelected}
                addCategory={this.addCategory}
                addSubGroup={this.addSubGroup}
                addComponent={this.addComponent}
                Active={this.Active}
                categoryValue={this.state.categoryValue}
                groupValue={this.state.groupValue}
                subgroupValue={this.state.subgroupValue}
                validGroup={this.state.validGroup}
                validSupGroup={this.state.validSupGroup}
                data={this.state.Data}
                isActive={this.state.isActive}
                Image={this.state.Image}
                dragEnter={this.dragEnter}
                dragLeave={this.dragLeave}
                dragOver={this.dragOver}
                fileDrop={this.fileDrop}
                removeImage={this.removeImage}
                selectedGroup={this.state.selectedGroup}
                selectedSubGroup={this.state.selectedSubGroup}
                handleImageChange={this.handleImageChange}
                allowToChange={this.state.allowToChange}
                ShowProgress={this.state.ShowProgress}
              />
            </Modal>
          ) : null}
          {this.state.showEditModel ? (
            <Modal
              modalButton='Save Edit'
              modalPurpose=''
              modalTitle='Edit product'
              width='50%'
              height='46%'
              size='sm'
              fun={this.handelEditProduct}
              onCLose={() => {
                this.DisplayEditModel(false);
                this.whenClose();
              }}>
              <EditProduct
                data={this.state.Data}
                components={this.state.components}
                handEditChange={this.handEditChange}
                handelEditComponent={this.handelEditComponent}
              />
            </Modal>
          ) : null}
          {this.state.showUploadModel ? (
            <Modal
              // isMulti={true}
              modalButton='Save Edit'
              modalPurpose=''
              modalTitle='Change image'
              width='50%'
              height='70%'
              fun={this.editImage}
              // onBack={() => {
              //   DisplayModel(true);
              //   DisplayUploadModel(false);
              // }}
              onCLose={() => {
                this.DisplayUploadModel(false);
                this.whenClose();
              }}>
              <UploadImage
                Active={this.Active}
                isActive={this.state.isActive}
                Image={this.state.Image}
                dragEnter={this.dragEnter}
                dragLeave={this.dragLeave}
                dragOver={this.dragOver}
                fileDrop={this.fileDrop}
                removeImage={this.removeImage}
                handleImageChange={this.handleImageChange}
                allowToChange={this.state.allowToChange}
              />
            </Modal>
          ) : null}
          {this.state.showSideNav && (
            <SideNav
              categories={this.state.categories}
              groups={this.state.groups}
              subgroups={this.state.subgroups}
              deleteItem={this.deleteItem}
              isLoading={this.state.isLoading}
              DisplaySideNav={this.DisplaySideNav}
            />
          )}
        </div>
      </div>
    );
  }
}
