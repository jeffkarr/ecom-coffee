import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
  <div className="wrapper container-fluid p-0 m-0">{props.children}</div>
);

export default Wrapper;
