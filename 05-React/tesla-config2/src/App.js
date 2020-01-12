import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    model: "Grande autonomie",
    color: "Blanc nacré"
  };
  render() {
    const colorOptions = [
      { name: "Blanc nacré", price: 0 },
      { name: "Noir uni", price: 1000 }
    ];

    const modelOptions = [
      { name: "Grande autonomie", price: 90700 },
      { name: "Performance", price: 106700 }
    ];

    let price = this.state.model === "Grande autonomie" ? 90700 : 106700;

    price = this.state.color === "Blanc nacré" ? price + 0 : price + 1000;

    return (
      <div className="container">
        <h1>Tesla Config </h1>

        <h2>Selectionnez votre véhicule </h2>
        {modelOptions.map((opt, index) => {
          return (
            <div
              onClick={() => {
                this.setState({ model: opt.name });
              }}
              className={
                this.state.model === opt.name ? "option selected " : "option"
              }
            >
              {opt.name} {opt.price} €
            </div>
          );
        })}

        <h2>Sélectionnez la couleur </h2>

        {colorOptions.map((option, index) => {
          return (
            <div
              onClick={() => {
                this.setState({ color: option.name });
              }}
              className={
                this.state.color === option.name ? "option selected " : "option"
              }
            >
              {option.name} {option.price} €
            </div>
          );
        })}

        <div className="buy-button">
          <p>{price} €</p>
          <button className="button">Buy !</button>
        </div>
      </div>
    );
  }
}

export default App;
