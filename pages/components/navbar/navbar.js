import {useContext} from "react"
import Link from "next/link"
import List from "./parts/list";
import New from "./parts/new";
import User from "./parts/user";
import {SetModalOpenContext} from "../../context/inputData"

export default function Navbar(props) {
  const toggleModalOpen = useContext(SetModalOpenContext)
  return (
    <div className="h-16 grid grid-cols-3">
      <Link href="/list">
        <div>
          <List></List>
        </div>
      </Link>
      <div onClick={toggleModalOpen}>
        <New></New>
      </div>
      <Link href="/user">
        <div>
          <User></User>
        </div>
      </Link>
    </div>
  )
}
