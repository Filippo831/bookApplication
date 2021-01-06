import AddIcon from '@material-ui/icons/Add';
export default function New(){
  return(
    <div className="w-full h-full bg-gray-400">
      <AddIcon className="relative top-1/2 left-1/2"
        style={{transform: "translate(-50%,-50%)"}}
        fontSize="large"
      >
      </AddIcon>
    </div>
  )
}
