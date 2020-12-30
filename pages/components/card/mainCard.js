import Upper from "./parts/upper";
import Lower from "./parts/lower";
import {useState} from "react";




export default function MainCard(props) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Upper ReadPer={props.per} open={open} setOpen={setOpen} numberCardPage={props.numberCardPage}></Upper>
      <Lower open={open} setOpen={setOpen}></Lower>
    </div>
  )
}
