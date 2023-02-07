import React from "react";
import { InputProps } from "./Input.types";

export const Input = ({value,handleChange}:InputProps)=>{
    return(
        <input onChange={handleChange} value={value}/>
    )
}
