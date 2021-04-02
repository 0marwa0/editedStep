/** @format */

// /** @format */

import { Config } from "./Config";
import axios from "axios";

export const loadData = (query, onSuccess, onFailure) => {
  // let data ;
  fetch(`${Config.host}${query}`, {
    headers: {
      token: localStorage.getItem("step_token"),
    },
  })
    .then((resp) => resp.json())
    .then((jsonData) => {
      onSuccess(jsonData.errMsg, jsonData);
    })
    .catch((err) => {
      onFailure(err.message);
    });
};

export const removeItem = (query, id, onSuccess, onFailure) => {
  fetch(`${Config.host}${query}/${id}`, {
    method: "delete",
    headers: {
      token: localStorage.getItem("step_token"),
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((jsonData) => {
      onSuccess(jsonData.errMsg, jsonData);
    })
    .catch((err) => {
      onFailure(err.message);
    });
};

export const removeItems = (query, ids, onSuccess, onFailure) => {
  fetch(`${Config.host}${query}`, {
    method: "delete",
    headers: {
      token: localStorage.getItem("step_token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ids),
  })
    .then((resp) => resp.json())
    .then((jsonData) => {
      onSuccess(jsonData.errMsg, jsonData);
    })
    .catch((err) => {
      onFailure(err.message);
    });
};

export const addData = (query, data, onSuccess, onFailure) => {
   if (data.price) {
    data.price = Number(data.price);
  }
  // console.log(data,"product data sended ");
  let options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("step_token"),
    },
    body: JSON.stringify(data),
  };

  if (query === "product") {
    var formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("price", data.price);
    formdata.append("description", data.description);
    formdata.append("subgroup", data.subgroup);
    formdata.append("components", data.components);
    formdata.append("image", data.image);

    options = {
      method: "post",
      body: formdata,
      headers: {
        token: localStorage.getItem("step_token"),
      },
    };
  } else {
  }

  fetch(`${Config.host}${query}`, options)
    .then((resp) => resp.json())
    .then((jsonData) => {
      // console.log(jsonData.errMsg, jsonData, "on Success");
      onSuccess(jsonData.errMsg, jsonData);
      // console.log("data sended", data);
    })
    .catch((err) => {
      // console.log(err, "add error");
      onFailure(err.message);
    });
};

export const editData = (query, data, id, onSuccess, onFailure) => {
  if (data.price) {
    data.price = Number(data.price);
  }

  let options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("step_token"),
    },
    body: JSON.stringify(data),
  };
  // console.log(data, "editable data");
  // if (query === "product") {
  //   var formdata = new FormData();
  //   formdata.append("name", data.name);
  //   formdata.append("price", data.price);
  //   formdata.append("components", data.components);
  //   options = {
  //     method: "put",
  //     body: formdata,
  //     headers: {
  //       token: localStorage.getItem("step_token"),
  //     },
  //   };
  // } else {
  // }
  fetch(`${Config.host}${query}/${id}`, options)
    .then((resp) => resp.json())
    .then((jsonData) => {
      // console.log(jsonData);
      onSuccess(jsonData.errMsg, jsonData);
    })

    .catch((err) => {
      console.log(err);
      onFailure(err.message);
    });
};

export const changeImage = (query, data, id, onSuccess, onFailure) => {
  // var formdata = new FormData();
  // formdata.append("image", data.image);
  // let options = {
  //   method: "put",
  //   body: formdata,
  //   headers: {
  //     token: localStorage.getItem("step_token"),
  //   },
  // };
  let options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("step_token"),
    },
    body: JSON.stringify(data),
  };

  fetch(`${Config.host}${query}/${id}`, options)
    .then((resp) => resp.json())
    .then((jsonData) => {
      onSuccess(jsonData.errMsg, jsonData);
      // console.log(jsonData, "change image");
    })
    .catch((err) => {
      onFailure(err.message);
    });
};
export const addProduct = (query, data, onSuccess, onFailure) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU5NTYyNzUwMX0.JWR_qBXWzXyDCQ1tOQBZnMawnSACrd0OdYhrMcbRPJc"
  );

  var formdata = new FormData();
  formdata.append("name", "");
  formdata.append("image", data.image);
  formdata.append("description", "description test");
  formdata.append("price", 55);
  formdata.append("subgroup", 51);
  formdata.append("components", []);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("https://step-copy.herokuapp.com/dash/v1/product", requestOptions)
    .then((resp) => resp.json())
    .then((jsonData) => {
      onSuccess(jsonData.errMsg, jsonData);
    })
    .catch((err) => {
      onFailure(err.message);
    });
};
