import {motion} from "framer-motion"
import Buttons from "./parts/buttons";
import Inputs from "./parts/inputs";

export default function NewBook(){
  return (
    <motion.div className="absolute z-50 flex flex-col w-4/5 m-6 m-auto bg-gray-600 rounded-3xl h-4/5"
      style={{top:"50vh",left:"50vw", transform:"translate(-50%,-50%)", maxWidth:"600px", maxHeight:"140vw"}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <Inputs></Inputs>
      <Buttons></Buttons>
    </motion.div>
  )
}
