/** @format */

import React, { useEffect, useState } from "react";
import "./index.css";
function Index() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // return setTimeout(setShow(false), 6000);
  });
  return (
    <div>
      <div id='toast' className='show'>
        <div id='img'>Icon</div>
        <div id='desc'>A notification message..</div>
      </div>
    </div>
  );
}

export default Index;
