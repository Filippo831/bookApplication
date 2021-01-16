import Button from "@material-ui/core/Button"

export default function Buttons(props){
  return(
    <div className="mt-auto mb-4 ml-auto mr-8">
      <Button onClick={props.toggleModalOpen}>annulla</Button>
      <Button variant="contained" color="primary">salva</Button>
    </div>
  )
}
