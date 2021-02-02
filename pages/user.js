import UserMain from "./components/user/userMain";
import Stats from "./components/user/userStats";
import {motion} from "framer-motion"

export default function User() {
  return (
    <motion.div className="p-6"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <div className="mb-2">
        <UserMain fontSize="large"></UserMain>
      </div>
      {/* --- STATS --- */}
      <div>
        <Stats></Stats>
      </div>
    </motion.div>
  )
}
