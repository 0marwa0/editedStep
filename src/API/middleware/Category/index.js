/** @format */

import axios from "axios";
import { Config } from "../../Config";
export default class API extends axios {
  static getCategory(callback, onSuccess, onFailure) {
    let URL = `${Config.host}/categories`;

    this.get(URL, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
    })
      .then(function (response) {
        let data = response.data;

        for (let i = 0; i < data.categories.length; i++) {
          callback(data.categories[0]);
        }
        // console.log(response, "categories");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static deleteCategory(id) {
    let URL = `${Config.host}/category/${id}`;

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
