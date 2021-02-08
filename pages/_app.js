import "../styles/globals.css"
import "../styles/tailwind.css"
import BookDataProvider from "./context/booksData";
import InputDataProvider from "./context/inputData"
import ColorsProvider from "./context/colorsImagesContext"
import MyLayout from "./layout";
import {AnimatePresence} from "framer-motion"

function MyApp({Component, pageProps}) {
  return (
    <MyLayout>
      <ColorsProvider>
        <BookDataProvider>
          <InputDataProvider>
            <AnimatePresence>
              <Component {...pageProps} />
            </AnimatePresence>
          </InputDataProvider>
        </BookDataProvider>
      </ColorsProvider>
    </MyLayout>
  )
}

export default MyApp
