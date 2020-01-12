import React, { Component, Fragment } from "react";

class Account extends Component {
  render() {
    const account = this.props.account;

    return (
      <Fragment>
        <div
          className="account--header"
          style={{ backgroundColor: account.color }}
        >
          <spam>{account.name}</spam>
          <spam>{account.balance} €</spam>
        </div>

        <div className="account--operations">
          {account.operations.map(operation => (
            <div className="operation">
              <span className="operation--date">{operation.date}</span>
              <span className="operation--description">
                {operation.description}
              </span>
              <span className="operation--amount">{operation.amount} €</span>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Account;
