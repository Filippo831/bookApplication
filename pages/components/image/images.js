import {motion} from "framer-motion"
import {TextField} from "@material-ui/core"
import Search from '@material-ui/icons/Search'
import {useState} from "react"

export default function Images(props) {
  const [imageSearch, setImageSearch] = useState("")

  return (
    <motion.div
      initial={{x: "100%"}}
      animate={{x: 0}}
      exit={{x: "-100%"}}
    >
      {/* --- INPUT --- */}
      <div className="w-4/5 pt-6 pb-4 mx-auto border-b border-red-900">
        <div className="flex justify-around mx-auto align-middle w-">
          <TextField label="cerca copertina"></TextField>
          <Search className="mt-auto" onChange={e => setImageSearch(e.target.value)} value={imageSearch}></Search>
        </div>
      </div>

      {/* --- IMAGES --- */}
      <div className="justify-around px-6 pt-10 pb-10 grid grid-cols-3 gap-4" >
        {props.imagesArray.map((image, index) => {
          return (
            <motion.div key={index}
              className="relative w-5/6 h-32 top-1/2 left-1/2 rounded-3xl"
              style={{transform: "translate(-50%,-50%)", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${image.contentUrl})`}}
            ></motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
