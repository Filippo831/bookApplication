import "../styles/globals.css"
import "../styles/tailwind.css"
import BookDataProvider from "./context/booksData";
import InputDataProvider from "./context/inputData"
import MyLayout from "./layout";

function MyApp({Component, pageProps}) {
  return (
    <MyLayout>
      <BookDataProvider>
        <InputDataProvider>
          <Component {...pageProps} />
        </InputDataProvider>
      </BookDataProvider>
    </MyLayout>
  )
}

export default MyApp
