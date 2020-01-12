import React, { Component } from "react";
import Account from "./Account";

class Accounts extends Component {
  render() {
    const accounts = this.props.data;
    return (
      <div className="accounts">
        {accounts.map((account, index) => {
          return <Account account={account} />;
        })}
      </div>
      /*  <div className="account">
        <div className="account--header">
          <div className="account--operation"></div>
        </div>
      </div> */
    );
  }
}

export default Accounts;
