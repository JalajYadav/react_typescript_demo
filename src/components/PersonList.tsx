type PersonListProps = {
    list : {
        firstName:string,
        lastName:string,
    }[]
}

export const PersonList = (props:PersonListProps)=>{
    return(
        <div>
            {props.list.map(ele=><h2>{ele.firstName} {ele.lastName}</h2>)}
        </div>
    )
}