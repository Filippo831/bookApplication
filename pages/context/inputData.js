import {createContext, useState} from "react";

const SetModalOpenContext = createContext({})
const SetInputDataContext = createContext({})
const InputDataContext = createContext({})
export default function inputDataProvider(props) {

  const [modalOpen, setModalOpen] = useState(false)

  const [isImage, setIsImage] = useState(false)
  const [image, setImage] = useState("")
  const [color, setColor] = useState("")

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [pages, setPages] = useState(0)

  const toggleModalOpen = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <InputDataContext.Provider value={{image, title, author, pages, isImage, color}}>
      <SetInputDataContext.Provider value={{setImage, setTitle, setAuthor, setPages, setIsImage, setColor}}>
        <SetModalOpenContext.Provider value={{toggleModalOpen, modalOpen}}>
          {props.children}
        </SetModalOpenContext.Provider>
      </SetInputDataContext.Provider>
    </InputDataContext.Provider>
  )
}
export {SetModalOpenContext, SetInputDataContext, InputDataContext}
