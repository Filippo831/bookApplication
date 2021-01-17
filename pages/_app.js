import "../styles/globals.css"
import "../styles/tailwind.css"
import BookDataProvider from "./context/booksData";
import MyLayout from "./layout";

function MyApp({Component, pageProps}) {
  return (
    <MyLayout>
      <BookDataProvider>
        <Component {...pageProps} />
      </BookDataProvider>
    </MyLayout>
  )
}

export default MyApp
