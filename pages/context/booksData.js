import {createContext, useEffect, useState} from "react"

const BookDataContext = createContext([]);

export default function BookDataProvider(props) {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    setReadBooks(JSON.parse(window.localStorage.getItem("book")));
  },[])
  return (
    <BookDataContext.Provider value={readBooks}>
      {props.children}
    </BookDataContext.Provider>
  )
}
export {BookDataContext};
