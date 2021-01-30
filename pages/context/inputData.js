import {createContext, useState} from "react";

const SetModalOpenContext = createContext({})
const SetInputDataContext = createContext({})
const InputDataContext = createContext({})
export default function inputDataProvider(props) {

  const [modalOpen, setModalOpen] = useState(false)
  const [image, setImage] = useState()
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [pages, setPages] = useState();
  const toggleModalOpen = () => {
    setModalOpen(!modalOpen)
  }
  return (
    <InputDataContext.Provider value={{image, title, author, pages}}>
      <SetInputDataContext.Provider value={{setImage, setTitle, setAuthor, setPages}}>
        <SetModalOpenContext.Provider value={{toggleModalOpen, modalOpen}}>
          {props.children}
        </SetModalOpenContext.Provider>
      </SetInputDataContext.Provider>
    </InputDataContext.Provider>
  )
}
export {SetModalOpenContext, SetInputDataContext, InputDataContext}
