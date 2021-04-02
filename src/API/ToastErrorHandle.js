/** @format */

import React from "react";
import { ToastContainer, toast } from "react-toastify";
export const ErrorToast = (error) => {
  let message;
  if (typeof error === "string") {
    message = error;
  } else {
    for (var key in error) {
      message = error[key];
    }
  }

  return toast(
    `
        ❌
      ${message}`,
    {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,

      progress: undefined,
    }
  );
};
export const ResponseToast = (errMsg) => {
  return errMsg.length != 0
    ? toast(`${errMsg}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      })
    : null;
};

export const SuccessToast = (userMsg) => {
  return toast(` ✔️ ${userMsg}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });
};

export const RejectToast = (errMsg) => {
  return errMsg
    ? toast(`  ❌ ${errMsg} `, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      })
    : null;
};
