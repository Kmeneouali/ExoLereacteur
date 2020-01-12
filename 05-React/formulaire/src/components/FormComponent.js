import React, { useState } from "react";

const FormComponent = () => {
  /* Declaration de states  */
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlChangeNom = event => {
    const value = event.target.value;
    setNom(value);
  };
  const handlChangePrenom = event => {
    const value = event.target.value;
    setPrenom(value);
  };
  const handlChangeEmail = event => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlChangePassword = event => {
    const value = event.target.value;

    setPassword(value);
  };

  const handlSubmit = event => {
    event.preventDefault();
    console.log(nom, prenom, email, password);
  };

  return (
    <div className="form1">
      <h1>Formulaire 1 </h1>
      <form onSubmit={handlSubmit}>
        Nom :
        <input type="text" name="Nom" value={nom} onChange={handlChangeNom} />
        Prénom :
        <input
          type="text"
          name="Nom"
          value={prenom}
          onChange={handlChangePrenom}
        />
        Email :
        <input
          type="text"
          name="Nom"
          value={email}
          onChange={handlChangeEmail}
        />
        Password :
        <input
          type="password"
          name="Nom"
          value={password}
          onChange={handlChangePassword}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormComponent;
