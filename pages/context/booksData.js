import {createContext, useContext, useEffect, useState} from "react"

const BookDataContext = createContext([]);

export default function BookDataProvider(props) {
  const [readBooks, setReadBooks] = useState([]);

  //get data from localStorage
  useEffect(() => {
    let books = JSON.parse(window.localStorage.getItem("book"))
    if (books == []) {
      setReadBooks([{description: {author: "nessun libro"}}]);
    }else{
      setReadBooks(books)
    }
  }, [])

  //return data as context 
  return (
    <BookDataContext.Provider value={readBooks}>
      {props.children}
    </BookDataContext.Provider>
  )
}

export {BookDataContext};
