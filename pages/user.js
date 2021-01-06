import UserMain from "./components/user/userMain";

export default function User() {
  return (
    <div>
      {/* --- BACK ARROW --- */}
      <div className="m-2">
        <UserMain fontSize="large"></UserMain>
      </div>
      {/* --- PERSONAL INFORMATION --- */}
      <div className="mb-10">
        {/*  NAME  */}
        <div className="flex ">
          <h3 className="">name:</h3>
          <h1 className="ml-4 font-semibold">Filippo</h1>
        </div>
      </div>
      {/* --- STATS --- */}
      <div>
        <div style={{height: "2px", marginLeft: "10%"}} className="w-4/5 bg-gray-300"></div>
        <div className="flex justify-around">
          <h1 className="relative px-2 bg-gray-700"
            style={{transform:"translate(0, -50%)"}}
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
    </div>
  )
}
