import {motion} from "framer-motion"
import {TextField} from "@material-ui/core"
import Search from '@material-ui/icons/Search'

export default function Images(props) {

  return (
    <motion.div
      initial={{x: "100%"}}
      animate={{x: 0}}
      exit={{x: "-100%"}}
    >
      <div className="w-4/5 pt-6 pb-4 mx-auto border-b border-red-900">
        {/* --- INPUT --- */}
        <div className="flex justify-around mx-auto align-middle w-">
          <TextField label="cerca copertina"></TextField>
          <Search className="mt-auto"></Search>
        </div>

      </div>
    </motion.div>
  )
}
