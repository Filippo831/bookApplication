import Upper from "./parts/upper";
import Lower from "./parts/lower";
import {useState} from "react";

export default function MainCard(props) {
  return (
    <div className="h-full">
      <Upper ReadPer={props.per}></Upper>
    </div>
  )
}
