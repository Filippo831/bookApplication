import {useState, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"
import ImageButtons from "./components/image/imageButtons";
import Colors from "./components/image/colors";
import Images from "./components/image/images";
import ImageUnderButtons from "./components/image/imageUnderButtons";


export default function Image(props) {
  const [imagesArray, setImagesArray] = useState([{}])
  const [isColor, setIsColor] = useState(true)
  useEffect(() => {
    ////--- GET API DATA --- 
    //fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=nba`, {
      //"method": "GET",
      //"headers": {
        //"x-rapidapi-key": "381ea1fe6fmsha0118ae3803305dp1abd96jsn5ba87b7fb627",
        //"x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
      //}
    //})
      //.then(response => response.json()
      //).then(data => {
        //localStorage.setItem("images", JSON.stringify(data.value))
        //setImagesArray(data.value)
      //})
      //.catch(err => {
        //console.error(err);
      //});
    setImagesArray(JSON.parse(localStorage.getItem("images")))
  }, [])
  console.log(imagesArray)

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
          <Images imagesArray={imagesArray}></Images>
        )}
      </AnimatePresence>
      <ImageUnderButtons></ImageUnderButtons>

    </motion.div>
  )
}
