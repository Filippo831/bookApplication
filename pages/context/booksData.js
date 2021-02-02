import {createContext, useContext, useEffect, useState} from "react"

const BookDataContext = createContext([]);

export default function BookDataProvider(props) {
  const [readBooks, setReadBooks] = useState([]);

  //get data from localStorage
  useEffect(() => {
    setReadBooks(JSON.parse(window.localStorage.getItem("book")));
  },[])

  //return data as context 
  return (
    <BookDataContext.Provider value={readBooks}>
      {props.children}
    </BookDataContext.Provider>
  )
}

export {BookDataContext};
