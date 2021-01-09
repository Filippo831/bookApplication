import {TextField} from "@material-ui/core"

export default function Inputs() {
  return(
      <div className="flex flex-col justify-between w-4/4/55 ml-6 mr-6 h-1/2">
        <TextField label="titolo"></TextField>
        <TextField label="autore"></TextField>
        <TextField label="pagine" type="number" className="appearance-none"></TextField>
      </div>
  )
}
