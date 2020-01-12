import React, { Component } from "react";
import Accounts from "./Accounts";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <Accounts data={this.props.data} />
      </div>
    );
  }
}

export default Content;
