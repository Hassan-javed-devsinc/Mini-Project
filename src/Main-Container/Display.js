import React from "react";

export default function Display(props) {
  return <div>{props.name.map((i) => i)}</div>;
}
