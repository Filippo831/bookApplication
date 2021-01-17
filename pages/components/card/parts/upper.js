import Image from "next/image"

export default function Upper(props) {
  return (
    <div style={{height: `5,5em`, width: "90vw", maxWidth: "calc(400px+10vw)"}}
      className="mx-auto"
    >
      <div style={{gridTemplateColumns: "80px auto 80px"}}
        className="h-full grid">

        {/* -IMAGE- */}
        <div className="z-10 bg-black rounded-l-2xl">
          <div style={{top: "50%", transform: "translate(0%, -50%)", backgroundSize: "100%, 100%", background: "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freadingchallengers.files.wordpress.com%2F2012%2F07%2F1984.jpg&f=1&nofb=1)"}}
            className="relative w-5/6 m-auto bg-white h-5/6 rounded-xl">
          </div>
        </div>

        {/* -DESCRIPTION- */}
        <div className="flex flex-col justify-between bg-gray-300"
          style={{paddingTop: "3px", paddingBottom: "3px"}}
        >
          {/* -title- */}
          <div>
            <h1 style={{fontSize: "20px", letterSpacing: "8px"}}>{props.bookData.name}</h1>
            <div style={{height: "2px", width: "80px", content: "none", bottom: "2px"}}
              className="relative bg-red-600">
            </div>
          </div>
          {/* -auth- */}
          <div className="relative" style={{bottom: "2px"}}>
            <h2>author</h2>
          </div>
          {/* -read pages- */}
          <div className="mt-auto">
            <h3>203/400</h3>
          </div>
        </div>

        {/* -READ/OPTION- */}
        <div className="flex flex-col text-center bg-red-400 rounded-tr-2xl">
          {/* -continue reading- */}
          <div>
            <h1 style={{fontSize: "40px"}}>C</h1>
          </div>
          {/* -settings- */}
          <div  className="mt-auto">
            <h1>. . .</h1>
          </div>
        </div>
      </div>

        {/* -READ PERCENT- */}
      <div style={{transform: "translate(0,-100%)", height: `calc(100%*${props.ReadPer / 100})`}}
        className="relative bg-green-400 opacity-20 rounded-t-2xl rounded-bl-2xl"
      ></div>
    </div>
  )
}
