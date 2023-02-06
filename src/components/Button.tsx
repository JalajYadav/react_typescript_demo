import React from "react";

type ButtonProps = {
    handleClick : (event: React.MouseEvent<HTMLButtonElement>,otherData:{id:number,name:string})=>void;
}

export const Button = (props:ButtonProps)=>{
    return (
        <button onClick={(event)=>props.handleClick(event,{id:1,name:"Jalaj"})}>Click Me</button>
    )
}