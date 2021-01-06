import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default function User(){
  return(
    <div className="w-full h-full bg-gray-400">
      <AccountCircleIcon className="relative top-1/2 left-1/2"
        style={{transform:"scale(10)",transform: "translate(-50%,-50%)"}}
        fontSize="large"
      >
      </AccountCircleIcon>
    </div>
  )
}
