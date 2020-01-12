import React, { useState } from "react";

import "./App.css";
import Key from "./components/Key";

const rows = [
  ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "⌫"],
  ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
  ["MAJ", "w", "x", "SPACE", "c", "v", "b", "n"]
];

function App() {
  const [text, setText] = useState("Hello Word");
  const [maj, SetMaj] = useState(false);

  const handleUpdateText = lettre => {
    if (lettre === "SPACE") {
      setText(text + " ");
    } else if (lettre === "⌫") {
      setText(text.slice(0, text.length - 1));
    } else if (lettre === "MAJ") {
      SetMaj(!maj);
    } else {
      if (maj) {
        lettre = lettre.toUpperCase();
      }
      setText(text + lettre);
    }
  };

  return (
    <div className="keyboard">
      <pre>
        <span
          style={{
            minHeight: "2rem",
            lineHeight: "2rem",
            fontSize: "2rem",
            borderRight: "3px solid black",
            display: "inline-block",
            margin: "1rem"
          }}
        >
          {text}
        </span>
      </pre>
      {rows.map((row, index) => {
        return (
          <div className="row">
            {row.map((lettre, index) => {
              return <Key value={lettre} onClick={handleUpdateText} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
