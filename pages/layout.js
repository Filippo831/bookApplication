export default function MyLayout(props){
  return(
    <div className="bg-gray-700" style={{minHeight:"100vh"}}>
      {props.children}
    </div>
  )
}
