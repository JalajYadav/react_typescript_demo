type Greetprops={
    name:string
}

export const Greet  = (props:Greetprops)=>{
    return(
        <div>
            <h2>Welcome {props.name} you have 10 unread messages.</h2>
        </div>
    )
}
