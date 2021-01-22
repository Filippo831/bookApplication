import Link from "next/link"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export default function UpperList() {
  return (
    <div>
      <div>
        <Link href="/">
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </Link>
      </div>
    </div>
  )
}
