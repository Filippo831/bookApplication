import {useState} from "react"
import {motion} from "framer-motion"
export default function Colors() {
  const colors = ["#24234d","#389433","#324722","#24234d","#389433","#324722","#24234d","#389433","#324722"]
  const [selected, setSelected] = useState()
  return(
    <motion.div className="justify-around px-6 pt-10 grid grid-cols-3 gap-4"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:0.2}}
    >
      {colors.map((color, index)=>{
        return (
          <div key={index}
            className="relative w-5/6 h-32 top-1/2 left-1/2 rounded-3xl"
            style={{transform:"translate(-50%,-50%)", backgroundColor:`${color}`, boxShadow:index==selected?"0 0 0 3px blue":""}}
            onClick={() => setSelected(index)}
          ></div>
        )
      })}

    </motion.div>
  )
}
