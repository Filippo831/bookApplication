import Link from "next/link"
import {TextField} from "@material-ui/core"
import {PermMedia} from "@material-ui/icons"
import {SetInputDataContext, InputDataContext} from "../../../context/inputData"
import {useContext, useState, useEffect} from "react"

export default function Inputs(props) {
  const {image, title, author, pages, isImage, color} = useContext(InputDataContext)
  const {setImage, setTitle, setAuthor, setPages, setIsImage, setColor} = useContext(SetInputDataContext)
  const [displayImage, setDisplayImage] = useState()

  useEffect(() => {
    if (isImage) {
      console.log("ho unimmagine")
      setDisplayImage(`url(${image})`)
    } else {
      if (color != "") {
        console.log("ho un colore", color)
        setDisplayImage(`${color}`)
      } else {
        console.log("non ho un colore")
        setDisplayImage("#ff0000")
      }
    }

  }, [])

  return (
    <div className="flex flex-col justify-between w-4/5 mt-6 ml-6 mr-6 h-1/2">
      {/* --- INPUT IMMAGINE ---*/}
      <div className="w-16 h-20 bg-red-100 rounded-xl"
        style={{
          background: displayImage,
          backgroundSize: isImage == true ? "cover" : "",
          backgroundPosition: isImage == true ? "center" : "",
          backgroundRepeat: isImage == true ? "no-repeat" : ""
        }}
      >
        <div className="relative top-1/2 left-1/2"
          style={{transform: "translate(-50%,-50%)"}}
        >
          <div className="flex justify-around">
            <div className="p-2 bg-blue-300 rounded-full">
              <Link href="/image" style="z-40">
                <PermMedia></PermMedia>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- TITLE, AUTH, PAGE INPUTS ---*/}
      <TextField value={title} onChange={e => setTitle(e.target.value)} label="titolo"></TextField>
      <TextField value={author} onChange={e => setAuthor(e.target.value)} label="autore"></TextField>
      <TextField value={pages} onChange={e => setPages(e.target.value)} label="pagine" type="number" className="appearance-none"></TextField>
    </div>
  )
}
