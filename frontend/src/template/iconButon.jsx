import React from "react";

//Components
import If from "./if";

export default props => (
  <If test={!props.hide}>
    <button className={"btn btn-" + props.style} onClick={props.onClick}>
      <i className={"fa fa-" + props.icon} />
    </button>
  </If>
);
