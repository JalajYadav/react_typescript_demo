type GreetProps={
    name:string,
    messageCount?: number,
    isLoggedIn: boolean,
}

export const Greet  = (props:GreetProps)=>{
    const {messageCount=0} =props;// As messageCount has type number and is optional? it can be
                                  // set to some default value with the help of object destructuring
    return(
        <div>
            <h2>
            {
                props.isLoggedIn
                ?`Welcome ${props.name} you have ${messageCount} unread messages.`
                :"Welcome Guest."
            }
        </h2>
        </div>
    )
}
