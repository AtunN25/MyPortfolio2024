import Icon from "@mdi/react"


type props = {
  icon:string,
  subtitleIcon:string
}

function BoxStack (props:props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full">
        <Icon path={props.icon}  size={2} />
        <p className='font-thin text-center'>{props.subtitleIcon}</p>
      </div>   
      
    </div>
  )
}

export default BoxStack
