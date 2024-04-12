import React from "react";

const InputWithLabel = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};
export default InputWithLabel;
