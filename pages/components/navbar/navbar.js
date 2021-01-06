import List from "./parts/list";
import New from "./parts/new";
import User from "./parts/user";

export default function Navbar(props) {
  return (
    <div className="align-middle grid grid-cols-3">
      <div>
        <List></List>
      </div>
      <div onClick={props.toggleModalOpen}>
        <New></New>
      </div>
      <div>
        <User></User>
      </div>
    </div>
  )
}
