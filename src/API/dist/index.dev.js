"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduct = exports.changeImage = exports.editData = exports.addData = exports.removeItems = exports.removeItem = exports.loadData = void 0;

var _Config = require("./Config");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @format */
// /** @format */
var loadData = function loadData(query, onSuccess, onFailure) {
  // let data ;
  fetch("".concat(_Config.Config.host).concat(query), {
    headers: {
      token: localStorage.getItem("step_token")
    }
  }).then(function (resp) {
    return resp.json();
  }).then(function (jsonData) {
    onSuccess(jsonData.errMsg, jsonData);
  })["catch"](function (err) {
    onFailure(err.message);
  });
};

exports.loadData = loadData;

var removeItem = function removeItem(query, id, onSuccess, onFailure) {
  fetch("".concat(_Config.Config.host).concat(query, "/").concat(id), {
    method: "delete",
    headers: {
      token: localStorage.getItem("step_token"),
      "Content-Type": "application/json"
    }
  }).then(function (resp) {
    return resp.json();
  }).then(function (jsonData) {
    onSuccess(jsonData.errMsg, jsonData);
  })["catch"](function (err) {
    onFailure(err.message);
  });
};

exports.removeItem = removeItem;

var removeItems = function removeItems(query, ids, onSuccess, onFailure) {
  fetch("".concat(_Config.Config.host).concat(query), {
    method: "delete",
    headers: {
      token: localStorage.getItem("step_token"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ids)
  }).then(function (resp) {
    return resp.json();
  }).then(function (jsonData) {
    onSuccess(jsonData.errMsg, jsonData);
  })["catch"](function (err) {
    onFailure(err.message);
  });
};

exports.removeItems = removeItems;

var addData = function addData(query, data, onSuccess, onFailure) {
  var options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("step_token")
    },
    body: JSON.stringify(data)
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
        token: localStorage.getItem("step_token")
      }
    };
  } else {}

  fetch("".concat(_Config.Config.host).concat(query), options).then(function (resp) {
    return resp.json();
  }).then(function (jsonData) {
    // console.log(jsonData.errMsg, jsonData, "on Success");
    onSuccess(jsonData.errMsg, jsonData); // console.log("data sended", data);
  })["catch"](function (err) {
    // console.log(err, "add error");
    onFailure(err.message);
  });
};

exports.addData = addData;

var editData = function editData(query, data, id, onSuccess, onFailure) {
  if (data.price) {
    data.price = Number(data.price);
  }

  var options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("step_token")
    },
    body: JSON.stringify(data)
  }; // console.log(data, "editable data");
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

  fetch("".concat(_Config.Config.host).concat(query, "/").concat(id), options).then(function (resp) {
    return resp.json();
  }).then(function (jsonData) {
    // console.log(jsonData);
    onSuccess(jsonData.errMsg, jsonData);
  })["catch"](function (err) {
    console.log(err);
    onFailure(err.message);
  });
};

exports.editData = editData;

var changeImage = function changeImage(query, data, id, onSuccess, onFailure) {
  // var formdata = new FormData();
  // formdata.append("image", data.image);
  // let options = {
  //   method: "put",
  //   body: formdata,
  //   headers: {
  //     token: localStorage.getItem("step_token"),
  //   },
  // };
  var options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("step_token")
    },
    body: JSON.stringify(data)
  };
  fetch("".concat(_Config.Config.host).concat(query, "/").concat(id), options).then(function (resp) {
    return resp.json();
  }).then(function (jsonData) {
    onSuccess(jsonData.errMsg, jsonData); // console.log(jsonData, "change image");
  })["catch"](function (err) {
    onFailure(err.message);
  });
};

exports.changeImage = changeImage;

var addProduct = function addProduct(query, data, onSuccess, onFailure) {
  var myHeaders = new Headers();
  myHeaders.append("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjEsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU5NTYyNzUwMX0.JWR_qBXWzXyDCQ1tOQBZnMawnSACrd0OdYhrMcbRPJc");
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
    redirect: "follow"
  };
  fetch("https://step-copy.herokuapp.com/dash/v1/product", requestOptions).then(function (resp) {
    return resp.json();
  }).then(function (jsonData) {
    onSuccess(jsonData.errMsg, jsonData);
  })["catch"](function (err) {
    onFailure(err.message);
  });
};

exports.addProduct = addProduct;