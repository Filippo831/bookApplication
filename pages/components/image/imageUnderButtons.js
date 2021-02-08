import Button from "@material-ui/core/Button"
import Link from "next/link"
export default function ImageUnderButtons() {
  return (
    <div className="fixed shadow-2xl bottom-4 right-4">
      <Link href="/">
        <Button variant="contained" color="primary">ok</Button>
      </Link>
    </div>
  )
}
