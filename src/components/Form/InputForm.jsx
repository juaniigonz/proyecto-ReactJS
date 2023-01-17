import React from "react";
import "../CartModal/cart.css"

function InputForm(props) {
  return (
    <div className="formLabelInput">
      <label>{props.title}</label>
      <input
        required
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputForm;
