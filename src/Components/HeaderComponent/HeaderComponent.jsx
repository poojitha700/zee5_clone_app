import React, { Fragment } from "react";
import Leftmenu from "./Leftmenu";
import Rightmenu from "./Rightmenu";
import "./header.css";

const HeaderComponent = (props) => {
  return (
    <Fragment>
      <nav>
        <Leftmenu />
        <Rightmenu userData={props.userData} />
      </nav>
    </Fragment>
  );
};

export default HeaderComponent;
