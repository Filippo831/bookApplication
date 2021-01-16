import "../styles/globals.css"
import "../styles/tailwind.css"
import MyLayout from "./layout";

function MyApp({Component, pageProps}) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}

export default MyApp
