export default function Stats() {
  return (
    <div>
      {/* DIVISOR */}
      <div style={{height: "2px"}} className="w-full bg-gray-300"></div>
      <div className="flex justify-around">
        <h1 className="relative px-2 bg-gray-700"
          style={{transform: "translate(0, -50%)"}}
        >STATS</h1>
      </div>
      {/*  NUMBER OF BOOK READ  */}
      <div>
        <h3>number of book read</h3>
        <h1>12</h1>
      </div>
      {/*  READ TIME  */}
      <div>
        <h3>raad time</h3>
        <h1>200 minutes</h1>
      </div>
      {/*  PAGES READ  */}
      <div>
        <h3>number of pages read</h3>
        <h1>2345</h1>
      </div>
    </div>

  )
}
