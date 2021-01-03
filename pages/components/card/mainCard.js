import Upper from "./parts/upper";
import Lower from "./parts/lower";
import {useState} from "react";

export default function MainCard(props) {
  return (
    <div>
      <Upper ReadPer={props.per}  numberCardPage={props.numberCardPage}></Upper>
    </div>
  )
}
