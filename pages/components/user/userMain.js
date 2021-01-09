import Link from "next/link"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export default function UserMain() {
  return (
    <div>
      {/* --- FRECCIA RETURN --- */}
      <div className="mb-4">
        <Link href="/">
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </Link>
      </div>
      {/* --- PERSONAL INFORMATION --- */}
      <div className="mb-10">
        {/*  NAME  */}
        <div className="flex ">
          <h3 className="">name:</h3>
          <h1 className="ml-4 font-semibold">Filippo</h1>
        </div>
      </div>
    </div>
  )
}
