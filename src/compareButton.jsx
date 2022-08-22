import React from "react";
export default function compareButton(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "30px",
      }}
    >
      <button onClick={props.generatetext(props.text1, props.text2)}>
        Comparar
      </button>
    </div>
  );
}
