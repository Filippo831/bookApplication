import {TextField} from "@material-ui/core"
import {PermMedia} from "@material-ui/icons"

export default function Inputs(props) {
  return (
    <div className="flex flex-col justify-between w-4/5 mt-6 ml-6 mr-6 h-1/2">
      {/* --- INPUT IMMAGINE ---*/}
      <div className="w-16 h-20 bg-red-600 rounded-xl">
        <div className="relative top-1/2 left-1/2"
          style={{transform: "translate(-50%,-50%)"}}
          onClick={props.toggleImageOpen}
        >
          <div className="flex justify-around">
            <div className="p-2 bg-blue-300 rounded-full">
              <PermMedia></PermMedia>
            </div>
          </div>
        </div>
      </div>

      {/* --- TITLE, AUTH, PAGE INPUTS ---*/}
      <TextField value={props.title} onChange={e => props.setTitle(e.target.value)} label="titolo"></TextField>
      <TextField value={props.author} onChange={e => props.setAuthor(e.target.value)} label="autore"></TextField>
      <TextField value={props.pages} onChange={e => props.setPages(e.target.value)} label="pagine" type="number" className="appearance-none"></TextField>
    </div>
  )
}
