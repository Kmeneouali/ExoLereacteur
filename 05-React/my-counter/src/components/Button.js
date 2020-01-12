import React, { Component, Fragment } from "react";

class MyButton extends Component {
  render() {
    return (
      <Fragment>
        <button
          disabled={this.props.disabled}
          onClick={() => this.props.setCounter()}
        >
          {this.props.text}
        </button>
      </Fragment>
    );
  }
}

export default MyButton;
