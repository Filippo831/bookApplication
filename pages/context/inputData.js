import {createContext, useState} from "react";

const SetModalOpenContext = createContext(() => {})
const ModalValueContext = createContext()
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
      <ModalValueContext.Provider value={modalOpen}>
        <SetInputDataContext.Provider value={{setImage, setTitle, setAuthor, setPages, setIsImage, setColor}}>
          <SetModalOpenContext.Provider value={toggleModalOpen}>
            {props.children}
          </SetModalOpenContext.Provider>
        </SetInputDataContext.Provider>
      </ModalValueContext.Provider>
    </InputDataContext.Provider>
  )
}
export {ModalValueContext,SetModalOpenContext, SetInputDataContext, InputDataContext}
