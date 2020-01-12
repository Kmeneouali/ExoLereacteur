import React, { Component, Fragment } from "react";
import MyButton from "./Button";

class Counter extends Component {
  state = {
    counterA: 0,
    counterB: 0,
    counterC: 0
  };

  addCounterA = () => {
    this.setState({ counterA: this.state.counterA + 1 });
  };

  subCounterA = () => {
    this.setState({ counterA: this.state.counterA - 1 });
  };

  addCounterB = () => {
    this.setState({ counterB: this.state.counterB + 1 });
  };

  subCounterB = () => {
    this.setState({ counterB: this.state.counterB - 1 });
  };

  addCounterC = () => {
    this.setState({ counterC: this.state.counterC + 1 });
  };

  subCounterC = () => {
    this.setState({ counterC: this.state.counterC - 1 });
  };

  render() {
    return (
      <div>
        <Fragment>
          <div className="counterA">
            <MyButton disabled text="+" setCounter={this.addCounterA} />
            <span>{this.state.counterA}</span>
            <MyButton text="-" setCounter={this.subCounterA} />
          </div>
          <div className="counterB">
            <MyButton text="+" setCounter={this.addCounterB} />
            <span>{this.state.counterB}</span>
            <MyButton text="-" setCounter={this.subCounterB} />
          </div>
          <div className="counterC">
            <MyButton text="+" setCounter={this.addCounterC} />
            <span>{this.state.counterC}</span>
            <MyButton text="-" setCounter={this.subCounterC} />
          </div>
        </Fragment>
      </div>
    );
  }
}

export default Counter;
