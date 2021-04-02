/** @format */

import axios from "axios";
import { Config } from "../../Config";
export default class index extends axios {
  static getStuff(callback) {
    let URL = `${Config.host}/admins`;

    this.get(URL, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
    })
      .then(function (response) {
        let data = response.data;
        callback(data);

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static createStuff(params, onSuccess, onFailure) {
    var raw = JSON.stringify(params);
    console.log(params, "params");
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("USER_TOKEN"),
      },
      body: raw,
      redirect: "follow",
    };

    fetch("https://step-copy.herokuapp.com/dash/v1/admin", requestOptions)
      .then((response) => response.json())
      .then((result) => onSuccess(result))
      .catch((error) => console.log("error", error));

    // let URL = `https://step-copy.herokuapp.com/dash/v1/admin`;
    // console.log(params, "params");

    // this.post(URL, params, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     token: localStorage.getItem("USER_TOKEN"),
    //   },
    // })
    //   .then(function (response) {
    //     let data = response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  static editStuff(params, onSuccess, onFailure) {
    let URL = `${Config.host}/admin`;

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
  static deleteStuff(id) {
    let URL = `${Config.host}/admin/${id}`;

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
  static deleteStuff(ids) {
    let URL = `${Config.host}/admins/${ids}`;

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
