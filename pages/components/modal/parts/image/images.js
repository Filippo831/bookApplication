import {motion} from "framer-motion"
export default function Images(props) {
  return(
    <motion.div 
      initial={{x:"100%"}}
      animate={{x:0}}
      exit={{x:"-100%"}}
    >
      <h1>ciao</h1>
    </motion.div>
  )
}
