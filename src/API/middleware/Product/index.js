/** @format */

import axios from "axios";
import { Config } from "../../Config";
export default class index extends axios {
  static getProducts(callback, onSuccess, onFailure) {
    let URL = `${Config.host}/products`;

    this.get(URL, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
    })
      .then(function (response) {
        let data = response.data;
        callback(data);
        for (let i = 0; i < data.groups.length; i++) {
          callback(data.groups[0]);
        }
        // console.log(response, "products");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static createProduct(params, onSuccess, onFailure) {
    let URL = `${Config.host}/product`;

    this.post(URL, params, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
    })
      .then(function (response) {
        let data = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static editProduct(params, onSuccess, onFailure) {
    let URL = `${Config.host}/product`;

    this.put(URL, params, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }
  static deleteProduct(id) {
    let URL = `${Config.host}/product/${id}`;

    this.delete(URL, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }
  static deleteProducts(ids) {
    let URL = `${Config.host}/product/${ids}`;

    this.delete(URL, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }
}
