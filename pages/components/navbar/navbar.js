import Link from "next/link"
import List from "./parts/list";
import New from "./parts/new";
import User from "./parts/user";

export default function Navbar(props) {
  return (
    <div className="h-16 grid grid-cols-3">
      <Link href="/list">
        <div>
          <List></List>
        </div>
      </Link>
      <div onClick={props.toggleModalOpen}>
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
