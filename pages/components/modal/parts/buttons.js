import Button from "@material-ui/core/Button"
import {useContext} from "react"
import {InputDataContext} from '../../../context/inputData'
import {SetModalOpenContext} from "../../../context/inputData"

let books = [];

export default function Buttons(props) {
  const inputData = useContext(InputDataContext)
  const toggleModalOpen = useContext(SetModalOpenContext)
  const handleInputData = async () => {
    const newBook = {
      description: {
        name: inputData.name,
        author: inputData.author
      },
      data: {
        pages: {
          pagesNumber: inputData.pages
        },
        time: {
          totalTime: 0,
          timePerPage: 0,
        }
      },
      image: {
        isImage: inputData.isImage,
        imageLink: inputData.imageLink,
        color: inputData.color
      }
    }
    books = await JSON.parse(localStorage.getItem("book"))
    books = {...books, newBook}
    localStorage.setItem("book", JSON.stringify(books))
  }
  return (
    <div className="mt-auto mb-4 ml-auto mr-8">
      <Button onClick={toggleModalOpen}>annulla</Button>
      <Button onClick={handleInputData} variant="contained" color="primary">salva</Button>
    </div>
  )
}
