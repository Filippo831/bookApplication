import Button from "@material-ui/core/Button"
import {useContext} from "react"
import {InputDataContext} from '../../../context/inputData'
import {SetModalOpenContext} from "../../../context/inputData"
import {BookDataContext} from "../../../context/booksData"

let books = [];

export default function Buttons(props) {
  const inputData = useContext(InputDataContext)
  const toggleModalOpen = useContext(SetModalOpenContext)
  const [readBook, setReadBooks] = useContext(BookDataContext)
  const handleInputData = async () => {
    const date = new Date()
    const currentTime = date.getTime()
    const newBook = {
      description: {
        name: inputData.title,
        author: inputData.author
      },
      data: {
        pages: {
          pagesNumber: inputData.pages,
          pagesRead:0
        },
        time: {
          totalTime: 0,
          timePerPage: 0,
        },
        dates: {
          added: currentTime
        }
      },
      image: {
        isImage: inputData.isImage,
        imageLink: inputData.image,
        color: inputData.color
      }
    }
    books = await JSON.parse(localStorage.getItem("book"))
    console.log(books)
    books = [...books, newBook]
    setReadBooks([...readBook, newBook])
    localStorage.setItem("book", JSON.stringify(books))
  }
  return (
    <div className="mt-auto mb-4 ml-auto mr-8">
      <Button onClick={toggleModalOpen}>annulla</Button>
      <Button onClick={()=>{handleInputData(); toggleModalOpen()}} variant="contained" color="primary">salva</Button>
    </div>
  )
}
