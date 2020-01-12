import React, { Component } from "react";
/* import "./css/reset.css"; */
import "./css/App.css";
import macbookImg from "./img/macbook.jpeg";

class App extends Component {
  // le state de l'application
  state = {
    // pour chaque choix, on garde en state le numéro de l'élément sélectionné
    // Ici le state initial c'est la premiere option du processeur qui est sélectionnée (Processeur Intel Core i7...)
    processor: 0,
    memory: 0,
    gpu: 0,
    storage: 0,
    keyboard: 0,
    // Pour les logiciel on utilise un boolean qui indique si on veut ou non inclure le logiciel en question
    // Ici dans le state initial aucun logiciels n'est inclus
    finalCut: false,
    logicPro: false
  };
  render() {
    const options = {
      processor: [
        {
          name:
            "Processeur Intel Core i7 hexacœur de 9e génération à 2,6 GHz (Turbo Boost jusqu’à 4,5 GHz)",
          price: 0
        },
        {
          name:
            "Processeur Intel Core i9 8 cœurs de 9e génération à 2,4 GHz (Turbo Boost jusqu’à 5 GHz)",
          price: 360
        }
      ],
      memory: [
        { name: "16 Go de mémoire DDR4 à 2 400 MHz", price: 0 },
        { name: "32 Go de mémoire DDR4 à 2 400 MHz", price: 480 }
      ],
      gpu: [
        { name: "Radeon Pro 555X avec 4 Go de mémoire GDDR5", price: 0 },
        { name: "Radeon Pro 560X avec 4 Go de mémoire GDDR5", price: 120 }
      ],
      storage: [
        { name: "SSD de 256 Go", price: 0 },
        { name: "SSD de 512 Go", price: 240 },
        { name: "SSD de 1 To", price: 480 },
        { name: "SSD de 2 To", price: 960 },
        { name: "SSD de 4 To", price: 1920 }
      ]
    };

    // On récupère les options selectionnées (grace au state)

    const selectedProcessor = options.processor[this.state.processor];
    const selectedMemory = options.memory[this.state.memory];
    const selectedGpu = options.gpu[this.state.gpu];
    const selectedStorage = options.storage[this.state.storage];
    const finalCutPrice = this.state.finalCut === false ? 0 : 329.99;
    const logicProPrice = this.state.logicPro === false ? 0 : 229.99;

    // On calcule le total
    const total =
      2699 +
      selectedProcessor.price +
      selectedMemory.price +
      selectedGpu.price +
      selectedStorage.price +
      finalCutPrice +
      logicProPrice;

    // On arrondis à deux chiffres apres la virgule
    const totalDisplay = Math.floor(total * 100) / 100;

    return (
      <>
        <header></header>
        <div className="product-name">
          <h1>MacBook Pro</h1>
        </div>
        <div className="columns">
          <div className="macbook">
            <img src={macbookImg} alt="macbook" />
          </div>
          <div className="column">
            <h2>Personnalisez votre MacBook Pro 15 pouces - Gris sidéral</h2>
            <p className="recap">{selectedProcessor.name}</p>
            <p className="recap">Écran Retina avec affichage True Tone</p>
            <p className="recap">Touch Bar et Touch ID</p>
            <p className="recap">{selectedMemory.name}</p>
            <p className="recap">{selectedGpu.name}</p>
            <p className="recap">{selectedStorage.name}</p>
            <p className="recap">Quatre ports Thunderbolt 3</p>

            <div className="options">
              {/* PROCESSEUR  */}
              <div>
                <h4 className="choice-name">Processeur</h4>
                {options.processor.map((option, index) => {
                  const selectedOption =
                    options.processor[this.state.processor];

                  const selectedOptionPrice = selectedOption.price;
                  const price = option.price - selectedOptionPrice;

                  return (
                    <div
                      className={
                        "vertical-choice " +
                        (this.state.processor === index ? "selected" : "")
                      }
                      onClick={() => {
                        this.setState({ processor: index });
                      }}
                    >
                      <span className="choice-name">{option.name}</span>
                      <span className="choice-price">
                        {price === 0 ? null : price + " €"}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* MEMOIRE  */}
              <div>
                <h4 className="choice-name">Mémoire</h4>

                {options.memory.map((option, index) => {
                  const selectedOption = options.memory[this.state.memory];

                  const selectedOptionPrice = selectedOption.price;
                  const price = option.price - selectedOptionPrice;
                  return (
                    <div
                      onClick={() => {
                        this.setState({ memory: index });
                      }}
                      className={
                        "vertical-choice " +
                        (this.state.memory === index ? "selected" : "")
                      }
                    >
                      <span className="choice-name">{option.name}</span>
                      <span className="choice-price">
                        {price === 0 ? null : price + " €"}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* GRAPHIQUE  */}
              <div>
                <h4 className="choice-name">Graphique</h4>

                {options.gpu.map((option, index) => {
                  const selectedOption = options.gpu[this.state.gpu];

                  const selectedOptionPrice = selectedOption.price;
                  const price = option.price - selectedOptionPrice;

                  return (
                    <div
                      onClick={() => {
                        this.setState({ gpu: index });
                      }}
                      className={
                        "vertical-choice " +
                        (this.state.gpu === index ? "selected" : "")
                      }
                    >
                      <span className="choice-name">{option.name}</span>
                      <span className="choice-price">
                        {" "}
                        {price === 0 ? null : price + " €"}
                      </span>
                    </div>
                  );
                })}
              </div>
              {/* Stockage  */}
              <div>
                <h4 className="choice-name">Stockage</h4>

                {options.storage.map((option, index) => {
                  const selectedOption = options.storage[this.state.storage];

                  const selectedOptionPrice = selectedOption.price;
                  const price = option.price - selectedOptionPrice;
                  return (
                    <div
                      onClick={() => {
                        this.setState({ storage: index });
                      }}
                      className={
                        "vertical-choice " +
                        (this.state.storage === index ? "selected" : "")
                      }
                    >
                      <span className="choice-name">{option.name}</span>
                      <span className="choice-price">
                        {price === 0 ? null : price + " €"}
                      </span>
                    </div>
                  );
                })}
              </div>
              <h3>Logiciel préinstallés</h3>
              <div>
                <h4 className="choice-name">Final Cut Pro X</h4>
                <div className="horizontal-choice">
                  <div
                    className={
                      "horizontal-item " +
                      (this.state.finalCut === false ? "selected" : "")
                    }
                    onClick={() => {
                      this.setState({ finalCut: false });
                    }}
                  >
                    <span className="choice-name">Aucun</span>
                    {this.state.finalCut === true && <span> -329,99 € </span>}
                  </div>
                  <div
                    className={
                      "horizontal-item " +
                      (this.state.finalCut === true ? "selected" : "")
                    }
                    onClick={() => {
                      this.setState({ finalCut: true });
                    }}
                  >
                    <span className="choice-name">Final Cut Pro X</span>
                    {this.state.finalCut === false && <span> +329,99 € </span>}
                  </div>
                </div>

                <h4 className="choice-name">Logic Pro X</h4>
                <div className="horizontal-choice">
                  <div
                    className={
                      "horizontal-item " +
                      (this.state.logicPro === false ? "selected" : "")
                    }
                    onClick={() => {
                      this.setState({ logicPro: false });
                    }}
                  >
                    <span className="choice-name">Aucun</span>
                    {this.state.logicPro === true && <span> - 329,99 € </span>}
                  </div>
                  <div
                    className={
                      "horizontal-item " +
                      (this.state.logicPro === true ? "selected" : "")
                    }
                    onClick={() => {
                      this.setState({ logicPro: true });
                    }}
                  >
                    <span className="choice-name">Logic Pro X</span>
                    {this.state.logicPro === false && <span> + 329,99 € </span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-content">
              {totalDisplay} €<button>Ajouter au Panier</button>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default App;
