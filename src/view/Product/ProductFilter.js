/** @format */

// /** @format */

// import React, { useState } from "react";
// import ListFilter from "../../shared/List/List_filter";
// import DeleteCustomer from "./DeleteCustomer_";
// import Modal from "../../shared/Modal/index";
// import CreateCustomer from "./CreateCustomer";
// import { render } from "@testing-library/react";

// export default class index extends React.Component {
//   state = {
//     showModal: false,
//   };

//   DisplayModel = (showModal) => {
//     setModel(show);
//     this.setState({ showModal });
//   };

//   render() {
//     return (
//       <div>
//         <ListFilter
//           // isChecked={this.props.isChecked}
//           selectedData={this.props.selectedData}
//           showModal={() => this.DisplayModel(true)}
//           ListName='product'
//           list={this.props.list}
//           burger={this.props.burger}
//           listActive={this.props.listActive}
//           burgerActive={this.props.burgerActive}
//           DeleteModal={() => this.DisplayDeleteModel(true)}>
//           {this.props.products}
//         </ListFilter>

//         {showModel ? (
//           <Modal
//             modalButton='Create New Item'
//             modalPurpose='From here you can add products to your list'
//             modalTitle='Add new Product'
//             width='60%'
//             height='70%'
//             fun={() => DisplayUploadModel(true)}
//             onCLose={() => DisplayModel(false)}>
//             <CreateProduct />
//           </Modal>
//         ) : null}

//         {/* {showUploadModel ? (
//         <Modal
//           isMulti={true}
//           modalButton='Create New Item'
//           modalPurpose='From here you can add products to your list'
//           modalTitle='Add new Product'
//           width='60%'
//           height='70%'
//           onBack={() => {
//             DisplayModel(true);
//             DisplayUploadModel(false);
//           }}
//           onCLose={() => DisplayUploadModel(false)}>
//           <UploadImage />
//         </Modal>
//       ) : null} */}
//       </div>
//     );
//   }
// }
