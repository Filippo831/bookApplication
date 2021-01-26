import {useState, useEffect} from "react"
import {motion, AnimatePresence} from "framer-motion"
import ImageButtons from "./image/imageButtons";
import Colors from "./image/colors";
import Images from "./image/images";


export default function Image(props) {
  useEffect(() => {
    /* --- GET API DATA --- */
    //fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${"nba"}`, {
    //"method": "GET",
    //"headers": {
    //"x-rapidapi-key": "381ea1fe6fmsha0118ae3803305dp1abd96jsn5ba87b7fb627",
    //"x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
    //}
    //})
    //.then(response => {
    //console.log(response);
    //})
    //.catch(err => {
    //console.error(err);
    //});
    //imagesArray = response.value;
  })
  const [isColor, setIsColor] = useState(true)
  return (
    <motion.div className="absolute top-0 z-40 w-screen h-screen bg-pink-600"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      {/* UPPER */}
      <ImageButtons toggleImageOpen={props.toggleImageOpen} setIsColor={setIsColor}></ImageButtons>
      <AnimatePresence>
        {isColor && (
          <Colors></Colors>
        )}
        {!isColor && (
          <Images></Images>
        )}

      </AnimatePresence>

    </motion.div>
  )
}
