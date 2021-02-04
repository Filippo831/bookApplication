import {useState, useEffect, useContext} from "react"
import {motion, AnimatePresence} from "framer-motion"
import ImageButtons from "./components/image/imageButtons";
import Colors from "./components/image/colors";
import Images from "./components/image/images";
import ImageUnderButtons from "./components/image/imageUnderButtons";
import {ColorsContext, ImagesArray, SearchImagesContext} from "./context/colorsImagesContext"


export default function Image(props) {
  const [isColor, setIsColor] = useState(true)
  const imagesArray = useContext(ImagesArray)
  const colorsArray= useContext(ColorsContext)
  const searchImagesFunction = useContext(SearchImagesContext)

  return (
    <motion.div className="w-screen"
      style={{minHeight:"100vh"}}
    >
      {/* UPPER */}
      <ImageButtons toggleImageOpen={props.toggleImageOpen} setIsColor={setIsColor}></ImageButtons>
      <AnimatePresence>
        {isColor && (
          <Colors></Colors>
        )}
        {!isColor && (
          <Images imagesArray={imagesArray} searchImagesFunction={searchImagesFunction}></Images>
        )}
      </AnimatePresence>
      <ImageUnderButtons></ImageUnderButtons>

    </motion.div>
  )
}
