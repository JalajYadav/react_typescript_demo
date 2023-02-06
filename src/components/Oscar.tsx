type OscarProps ={
    children:React.ReactNode,
}

export const Oscar = (props:OscarProps)=>{
    return(
        <div>
            Oscar Goes to Chiku Yadav
            {props.children}
        </div>
    )
}