import ListIcon from '@material-ui/icons/List';
export default function List() {
  return (
    <div className="w-full h-full bg-gray-400">
      <ListIcon className="relative top-1/2 left-1/2"
        style={{transform:"scale(10)",transform: "translate(-50%,-50%)"}}
        fontSize="large"
      >
      </ListIcon>
    </div>
  )
}
