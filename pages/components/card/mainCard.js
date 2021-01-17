import Upper from "./parts/upper";
import Lower from "./parts/lower";
import {useState} from "react";

export default function MainCard(props) {
  return (
    <div className="h-full">
      <Upper bookData={props.bookData}></Upper>
    </div>
  )
}
