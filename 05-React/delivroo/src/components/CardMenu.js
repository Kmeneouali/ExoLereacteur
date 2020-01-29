import React from "react";
import Logo from "../resources/img/deliveroo.png";
export default function CardMenu(props) {
  return (
    <div className="card-menu">
      <div>
        <h1 className="card-menu-title">{props.menu.title}</h1>

        <p className="card-menu-description">{props.menu.description}</p>
        <div className="card-menu-bottom">
          <div className="card-menu-bottom-price">{props.menu.price}</div>
          {props.menu.popular ? (
            <div className="card-menu-bottom-popular">
              <i className="fa fa-star"></i> populaire
            </div>
          ) : null}
        </div>
      </div>
      {props.menu.picture ? (
        <img
          className="card-menu-image"
          src={props.menu.picture}
          alt="menu__image"
          data-label="Brunchs"
          data-id="1519055545-88"
        />
      ) : (
        <img
          className="card-menu-image"
          src={Logo}
          alt="menu__image"
          data-label="Brunchs"
          data-id="1519055545-88"
        />
      )}
    </div>
  );
}
