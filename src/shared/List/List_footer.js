/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGreaterThan,
  faLessThan,
  faMap,
} from "@fortawesome/fontawesome-free-solid";
import React from "react";
const index = ({
  currentPage,
  searchResult,
  totalPageNumber,
  nextPage,
  prevPage,
}) => {
  return (
    <div className='List_footer'>
      <p>the results of your search is {searchResult} items</p>
      <div>
        <FontAwesomeIcon
          icon={faLessThan}
          className={currentPage > 1 ? "icon active" : "icon"}
          onClick={prevPage}
        />
        <p>
          {currentPage} / {totalPageNumber}
        </p>
        <FontAwesomeIcon
          icon={faGreaterThan}
          className={currentPage == totalPageNumber ? "icon " : "icon active"}
          onClick={nextPage}
        />
      </div>
    </div>
  );
};

export default index;
