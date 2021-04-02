/** @format */

import React, { Component } from "react";
import ListFilter from "../../shared/List/List_filter";
import { useState } from "react";
import CreateStuff from "./CreateStuff";
import Modal from "../../shared/Modal";
function Index({
  selectedData,
  DisplayEditModel,
  handelInputChange,
  handelCreateStuff,
  handelPassword,
  handelSelect,
  isLoading,
  isMatch,
  errorMsg,
  handelDelete,
  nameError,
  closeCreateModal,
  stuffType,
  whenClose,
}) {
  const [showModel, setModel] = useState(false);

  const DisplayModel = (show) => {
    setModel(show);
  };

  return (
    <div>
      <ListFilter
        showModal={() => DisplayModel(true)}
        ListName='Stuff'
        isLoading={isLoading}
        selectedData={selectedData}
        handelDelete={handelDelete}
        DisplayEditModel={DisplayEditModel}
      />

      {showModel ? (
        <Modal
          modalButton='Create New Item '
          modalPurpose='From here you can create new accounts'
          modalTitle='Add new team member'
          width='60%'
          height='73%'
          fun={handelCreateStuff}
          onCLose={() => {
            DisplayModel(false);
            closeCreateModal();
            whenClose();
          }}>
          <CreateStuff
            handelInputChange={handelInputChange}
            handelPassword={handelPassword}
            handelSelect={handelSelect}
            nameError={nameError}
            stuffType={stuffType}
            errorMsg={errorMsg}
            isMatch={isMatch}
          />
        </Modal>
      ) : null}
    </div>
  );
}

export default Index;
