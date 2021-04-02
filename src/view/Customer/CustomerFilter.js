/** @format */

import React, { useState } from "react";
import ListFilter from "../../shared/List/List_filter";
import DeleteCustomer from "./DeleteCustomer_";
import Modal from "../../shared/Modal/index";
import CreateCustomer from "./CreateCustomer";
import { removeItems, editData } from "../../API";
import EditCustomer from "./EditCustomer";
function Index({
  selectedData,
  isLoading,
  handelDelete,
  handelCreateCustomer,
  handelInputChange,
  handelEditStuff,
  whenClose,
  handelNameCheck,
  isMatch,
  Delete,
}) {
  const [showModel, setModel] = useState(false);
  const DisplayModel = (show) => {
    setModel(show);
  };
  const [showDeleteModel, setDeleteModel] = useState(false);
  const DisplayDeleteModel = (Delete) => {
    setDeleteModel(Delete);
  };
  const [EditModel, setEditModel] = useState(false);

  const DisplayEditModel = (EditModel) => {
    setEditModel(EditModel);
  };
  const onDelete = () => {
    // removeItem("user", id);
  };
  const onEdite = (data) => {
    // editData("user", id,data);
  };
  return (
    <div>
      <ListFilter
        selectedData={selectedData}
        showModal={() => DisplayModel(true)}
        ListName='customer'
        Delete={Delete}
        DeleteModal={() => DisplayDeleteModel(true)}
        DisplayEditModel={() => DisplayEditModel(true)}
        isLoading={isLoading}
      />

      {showModel ? (
        <Modal
          modalType='Create'
          modalButton='Create New Account '
          modalPurpose='From here you can create new accounts'
          modalTitle='Add new customer'
          width='50%'
          height='60%'
          size='sm'
          fun={handelCreateCustomer}
          onCLose={() => {
            DisplayModel(false);
            whenClose();
          }}>
          <CreateCustomer handelInputChange={handelInputChange} />
        </Modal>
      ) : null}
      {EditModel ? (
        <Modal
          modalButton='Save Edit '
          modalPurpose=''
          modalTitle='Edit customer'
          width='60%'
          height='60%'
          fun={handelEditStuff}
          onCLose={() => {
            DisplayEditModel(false);
            whenClose();
          }}>
          <EditCustomer
            handelInputChange={handelInputChange}
            data={selectedData}
          />
        </Modal>
      ) : null}
      {showDeleteModel ? (
        <Modal
          modalButton='Delete Account'
          modalType='Delete'
          modalPurpose='Write the name with respect to letter casing '
          modalTitle='Delete customer '
          width='45%'
          height='50%'
          size='sm'
          fun={() => {
            handelDelete(() => DisplayDeleteModel(false));
          }}
          onCLose={() => DisplayDeleteModel(false)}>
          <DeleteCustomer handelNameCheck={handelNameCheck} isMatch={isMatch} />
        </Modal>
      ) : null}
    </div>
  );
}

export default Index;
