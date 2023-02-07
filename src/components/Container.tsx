import React from "react"

type ContainerProps = {
    styles : React.CSSProperties;
}

export const Contanier = (props:ContainerProps)=>{
    return(
        <div style={props.styles}>
            Styled Container
        </div>
    )
}