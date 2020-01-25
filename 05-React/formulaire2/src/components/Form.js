import React from "react";

function Form(props) {
  const { label, value, setValue, type } = props;
  return (
    <div>
      <label>
        {label} :
        <input
          type={type}
          value={value}
          onChange={event => {
            setValue(event.target.value, label);
          }}
        ></input>
      </label>
    </div>
  );
}

export default Form;
