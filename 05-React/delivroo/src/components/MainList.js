import React from "react";
import CardMenu from "./CardMenu";

export default function MainList(props) {
  const categories = Object.keys(props.menu);

  return (
    <div className="main-list">
      {categories.map((categorie, index) => {
        const menu = props.menu[categorie];
        return (
          <>
            <div className="menu-categorie-title">{categorie}</div>
            <div className="menu-list">
              {menu.map((menuu, index) => {
                return <CardMenu menu={menuu} />;
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}
