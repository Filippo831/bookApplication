import {TextField} from "@material-ui/core"
import {PermMedia} from "@material-ui/icons"

export default function Inputs() {
  return (
    <div className="flex flex-col justify-between w-4/5 mt-6 ml-6 mr-6 h-1/2">
      {/* --- INPUT IMMAGINE ---*/}
      <div className="w-16 h-20 bg-red-600 rounded-xl">
        <div className="relative top-1/2 left-1/2"
          style={{transform: "translate(-50%,-50%)"}}
        >
          <div className="flex justify-around">
            <div className="p-2 bg-blue-300 rounded-full">
            <PermMedia></PermMedia>
</div>
          </div>
        </div>
      </div>
      <TextField label="titolo"></TextField>
      <TextField label="autore"></TextField>
      <TextField label="pagine" type="number" className="appearance-none"></TextField>
    </div>
  )
}
