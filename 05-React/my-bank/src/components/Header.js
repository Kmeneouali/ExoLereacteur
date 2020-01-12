import React, { Component } from "react";
import Logo from "./Logo";
import User from "./User";

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <User userName="khalled" />
      </header>
    );
  }
}

export default Header;
