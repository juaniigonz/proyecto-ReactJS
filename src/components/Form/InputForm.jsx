import React from "react";

function InputForm(props) {
  return (
    <div>
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
