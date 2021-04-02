/** @format */

import axios from "axios";
import { Config } from "../../Config";
export default class index extends axios {
  static getGroups(callback, onSuccess, onFailure) {
    let URL = `${Config.host}/groups`;

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
        // console.log(response, "groups");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static deleteGroup(id) {
    let URL = `${Config.host}/group/${id}`;

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
