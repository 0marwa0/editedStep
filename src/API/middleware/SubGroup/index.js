/** @format */

import axios from "axios";
import { Config } from "../../Config";
export default class index extends axios {
  static getSubGroup(callback, onSuccess, onFailure) {
    let URL = `${Config.host}/subgroups`;

    this.get(URL, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
    })
      .then(function (response) {
        let data = response.data;
        callback(data);
        for (let i = 0; i < data.subgroups.length; i++) {
          callback(data.subgroups[0]);
        }
        // console.log(response, "subgroups");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  static deleteSubGroup(id) {
    let URL = `${Config.host}/subgroup/${id}`;

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
