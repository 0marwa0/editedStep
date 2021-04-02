/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/fontawesome-free-solid";
class ListHead extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.isLoading
            ? `List_head ${" "}${this.props.style} loading`
            : `List_head ${" "}${this.props.style}`
        }>
        <div className='SORTIcon'>
          {/* <FontAwesomeIcon icon={faSort} className='icon' /> */}
          <div className='icon'>
            <div>
              <input
                type='checkbox'
                id='test0'
                checked={this.props.checkedAll}
                onChange={(e) => this.props.SelectAll(e)}
              />
              <label htmlFor='test0'></label>
            </div>
          </div>
        </div>

        <div className='sort_icon_hoglder '>
          <div>#</div>
        </div>
        <div className='sort_icon_holder '>
          {this.props.listName == "Stuff" ? (
            <div>Name</div>
          ) : (
            <div>{this.props.listName}Name</div>
          )}

          <FontAwesomeIcon icon={faSort} className='sort_icon' />
        </div>
        {this.props.listName == "Customer" ? null : <div></div>}

        {this.props.fieldsName.map((item, i) => (
          <div className='sort_icon_holder ' key={i}>
            <div>{item}</div>
            {i == this.props.fieldsName.length - 1 ? null : (
              <FontAwesomeIcon icon={faSort} className='sort_icon' />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default ListHead;
