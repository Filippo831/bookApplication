import {useRef, useEffect, useState} from "react"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {motion} from "framer-motion"

export default function ImageButtons(props) {
  const [colorPosition, setColorPosition] = useState({});
  const [imagePosition, setImagePosition] = useState({});
  const [linePosition, setLinePosition] = useState({x:0, width:0});
  
  const colorRef = useRef(null)
  const imageRef = useRef(null)

  const handleColorClick = () =>{
    setLinePosition(colorPosition)
    props.setIsColor(true)
  }

  const handleImageClick = () =>{
    setLinePosition(imagePosition)
    props.setIsColor(false)
  }

  useEffect(async() => {
    await setColorPosition(colorRef.current.getBoundingClientRect())
    await setImagePosition(imageRef.current.getBoundingClientRect())
  },[])
  useEffect(()=> {
    setLinePosition(colorPosition)

  }, [colorPosition])

  return (
    <div>
      {/* BUTTONS */}
      <div className="flex justify-between pt-6 pl-6 pr-12">
        <div>
          <ArrowBackIosIcon onClick={props.toggleImageOpen}
          ></ArrowBackIosIcon>
        </div>
        <div onClick={handleColorClick} ref={colorRef}>
          <h1>Colorsdfkljsalfkj</h1>
        </div>
        <div>
          <h1 onClick={handleImageClick} ref={imageRef}>Image</h1>
        </div>
      </div>
      {/* UNDERLINE*/}
      <motion.div animate={{x:linePosition.x, width:linePosition.width}} className="w-10 h-1 bg-red-900"></motion.div>

    </div>

  )
}
