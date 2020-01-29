import React from "react";

export default function SubHeader(props) {
  return (
    <div className="sub-header">
      <div>
        <h1 className="sub-header-title">{props.name}</h1>
        <div className="sub-header-description">{props.description}</div>
      </div>

      <img alt="deliveroo_img" src={props.picture} className="sub-header-img" />
    </div>
  );
}
