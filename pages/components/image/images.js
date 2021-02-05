import {motion} from "framer-motion"
import {TextField} from "@material-ui/core"
import Search from '@material-ui/icons/Search'
import {useState, useContext} from "react"
import {InputDataContext, SetInputDataContext} from "../../context/inputData"

export default function Images(props) {
  const [imageSearch, setImageSearch] = useState("")
  const [selected, setSelected] = useState()
  const {image, title, author, pages, isImage, color} = useContext(InputDataContext)
  const {setImage, setTitle, setAuthor, setPages, setIsImage, setColor} = useContext(SetInputDataContext)

  return (
    <div >
      {/* --- INPUT --- */}
      <div className="w-4/5 pt-6 pb-4 mx-auto border-b border-red-900">
        <div className="flex justify-around mx-auto align-middle">
          <TextField label="cerca copertina" onChange={e => setImageSearch(e.target.value)} value={imageSearch}></TextField>
          <Search className="mt-auto" onClick={()=>props.searchImagesFunction(imageSearch)}></Search>
        </div>
      </div>

      {/* --- IMAGES --- */}
      <motion.div className="justify-around px-6 pt-10 pb-10 grid grid-cols-3 gap-2"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2}}
      >
        {props.imagesArray.map((image, index) => {
          return (
            <div key={index}
              className="relative w-5/6 h-32 top-1/2 left-1/2 rounded-3xl"
              style={{
                transform: "translate(-50%,-50%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${image.contentUrl})`,
                boxShadow: index == selected ? "0 0 0 3px blue" : ""
              }}
              onClick={() => {setSelected(index), setIsImage(true), setImage(image.contentUrl)}}
            ></div>
          )
        })}
      </motion.div>
    </div>
  )
}
