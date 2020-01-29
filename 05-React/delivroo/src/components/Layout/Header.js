import React from "react";
import Logo from "../../resources/img/deliveroo.png";
export default function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="deliveroo" />
    </header>
  );
}
