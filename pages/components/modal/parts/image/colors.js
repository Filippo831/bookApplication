export default function Colors() {
  const colors = ["#24234d","#389433","#324722","#24234d","#389433","#324722","#24234d","#389433","#324722"]
  return(
    <div>
      {colors.map(color=>{
        (
          <div>ciao ${color}</div>
        )
      })}

    </div>
  )
}
