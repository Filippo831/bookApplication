import Link from "next/link"
import List from "./parts/list";
import New from "./parts/new";
import User from "./parts/user";

export default function Navbar(props) {
  return (
    <div className="h-full grid grid-cols-3">
      <div>
        <List></List>
      </div>
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