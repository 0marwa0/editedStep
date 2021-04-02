/** @format */

import React, { Component } from "react";
import Card from "../../shared/Card/Card";
import NotificationCtrl from "../../shared/NotificationCtrl";
import { Link } from "react-router-dom";
import Tost from "../../shared/Tost";
import { RejectToast } from "../../API/ToastErrorHandle";
// import { Customers } from "../../fakeData";
import { loadData } from "../../API/";
import { ToastContainer, toast } from "react-toastify";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = { showTost: false, statistics: {}, isLoading: true };
  }
  componentDidMount() {
    // console.log(this.props.isLogin);
    // if (!localStorage.getItem("step_token")) this.props.history.push("/");
    setTimeout(() => {
      this.setState({
        isLoading: false,
        statistics: {
          ordersThisWeek: "500",
          finished: "623",
          notifications: "896",
          hospitals: "325",
          customers: "354",
          items: "852",
        },
      });
    }, 1200);
    // loadData(
    //   "home",
    //   (errMsg, data) => {
    //     if (data.status) {
    //       this.setState({ isLoading: false });
    //       // console.log(data.statistics, "statistics");

    //       this.setState({ statistics: data.statistics, isLoading: false });
    //     } else {
    //       RejectToast(errMsg);
    //     }
    //   },
    //   (errMsg) => {
    //     RejectToast(errMsg);
    //   }
    // );
  }
  render() {
    return (
      <div>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar
          newestOnTop={true}
          closeButton={false}
          toastClassName='tostStyle'
          pauseOnFocusLoss
          draggable
          rtl={false}
          pauseOnHover
        />
        <div className='container'>
          <div className='cards_container'>
            <Link to='/productlist'>
              <Card
                icon='cardIcon1.png'
                cardName='Products list'
                className='card-1'
                cardInfo='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        voluptatibus minima fuga blanditiis  blanditiis .'
                btnName='Add new product'
              />
            </Link>
            <Link to='/customerlist'>
              <Card
                icon='cardIcon2.png'
                cardName='Customer list '
                className='card-2'
                cardInfo='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        voluptatibus minima fuga blanditiis  blanditiis '
                btnName='Add new customer'
              />
            </Link>
            <Link to='/stufflist'>
              <Card
                icon='cardIcon3.png'
                className='card-3'
                cardName='Stuff list'
                cardInfo='Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        voluptatibus minima fuga blanditiis blanditiis.'
                btnName='Add new employee'
              />
            </Link>
          </div>
          <div className='Notification_Container'>
            <NotificationCtrl
              icon='order.png'
              isLoading={this.state.isLoading}
              number={this.state.statistics.ordersThisWeek}
              label='Order for this week'
            />
            <NotificationCtrl
              icon='finished.png'
              isLoading={this.state.isLoading}
              number={this.state.statistics.finished}
              label='Finished orders this week'
            />
            {/* <NotificationCtrl
              icon='absence.png'
              number='500 hrs.'
              label='This week absence time'
            /> */}
            <NotificationCtrl
              icon='notification.png'
              isLoading={this.state.isLoading}
              number={this.state.statistics.notifications}
              label='notification this week'
            />
            <NotificationCtrl
              icon='hospitals.png'
              isLoading={this.state.isLoading}
              number={this.state.statistics.hospitals}
              label='New hospitals this week'
            />
            <NotificationCtrl
              icon='newCustomers.png'
              isLoading={this.state.isLoading}
              number={this.state.statistics.customers}
              label='New customers this week'
            />
            <NotificationCtrl
              icon='soldItem.png'
              isLoading={this.state.isLoading}
              number={this.state.statistics.items}
              label='Total sold items this week'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default index;
