import "../styles/globals.css"
import "../styles/tailwind.css"
import BookDataProvider from "./context/booksData";
import InputDataProvider from "./context/inputData"
import MyLayout from "./layout";
import {AnimatePresence} from "framer-motion"

function MyApp({Component, pageProps}) {
  return (
    <MyLayout>
      <BookDataProvider>
        <InputDataProvider>
          <AnimatePresence>
            <Component {...pageProps} />
          </AnimatePresence>
        </InputDataProvider>
      </BookDataProvider>
    </MyLayout>
  )
}

export default MyApp
