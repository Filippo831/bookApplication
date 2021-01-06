import Link from "next/link"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export default function UserMain() {
  return (
    <div>
      {/* --- FRECCIA RETURN --- */}
      <div>
        <Link href="/">
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </Link>
      </div>
    </div>
  )
}
