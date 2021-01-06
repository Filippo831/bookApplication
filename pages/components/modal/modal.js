import {motion} from "framer-motion"
import {TextField} from "@material-ui/core"

export default function NewBook(){
  return (
    <motion.div className="absolute z-50 w-4/5 m-auto bg-gray-600 rounded-3xl h-4/5"
      style={{top:"50vh",left:"50vw", transform:"translate(-50%,-50%)", maxWidth:"600px", maxHeight:"140vw"}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="w-full h-full">
        <TextField label="titolo"></TextField>
        <TextField label="autore"></TextField>
        <TextField label="pagine" type="number" className="appearance-none"></TextField>
      </div>
    </motion.div>
  )
}
