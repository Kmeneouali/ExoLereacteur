import React, { useState } from "react";

import "./css/App.css";
import Form from "./components/Form";

function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function updateState(value, label) {
    switch (label) {
      case "Nom":
        setNom(value);
        break;
      case "Prenom":
        setPrenom(value);
        break;
      case "Email":
        setEmail(value);
        break;
      case "Password":
        setPassword(value);
        break;

      default:
        break;
    }
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(nom, prenom, email, password);
  }
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <Form type="text" label="Nom" value={nom} setValue={updateState} />
        <Form
          type="text"
          label="Prenom"
          value={prenom}
          setValue={updateState}
        />
        <Form type="text" label="Email" value={email} setValue={updateState} />
        <Form
          type="text"
          label="Password"
          value={password}
          setValue={updateState}
        />

        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default App;
