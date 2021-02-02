import UpperList from "./components/list/list";
import {motion} from "framer-motion"

export default function List() {
  return (
    <motion.div className="p-6"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <UpperList></UpperList>
    </motion.div>
  )
}
