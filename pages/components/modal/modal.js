import {useState} from 'react'
import {motion, AnimatePresence} from "framer-motion"
import Buttons from "./parts/buttons";
import Image from "./parts/image";
import Inputs from "./parts/inputs";

export default function NewBook(props) {
  const [image, setImage] = useState()
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [pages, setPages] = useState();
  const [imageOpen, setImageOpen] = useState(false);

  const toggleImageOpen = () => {
    setImageOpen(!imageOpen)
  }

  return (
    <div className="w-full" style={{minHeight:"100vh"}}>
      <AnimatePresence>
        {imageOpen &&
          (<Image toggleImageOpen={toggleImageOpen} setImage={setImage}></Image>)
        }
      </AnimatePresence>
      <div className="absolute w-4/5 h-4/5"

        style={{top: "50vh", left: "50vw", transform: "translate(-50%,-50%)", maxWidth: "600px", maxHeight: "140vw"}}
      >
        <motion.div className="flex flex-col w-full h-full m-auto bg-gray-600 rounded-3xl"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <Inputs title={title} setTitle={setTitle}
            author={author} setAuthor={setAuthor}
            pages={pages} setPages={setPages}
            toggleImageOpen={toggleImageOpen}
          ></Inputs>
          <Buttons toggleModalOpen={props.toggleModalOpen}></Buttons>
        </motion.div>
      </div>
    </div>
  )
}
