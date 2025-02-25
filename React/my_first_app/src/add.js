import React from "react";
const Add =(props)=>{
    return(
        <h1>the addition of {props.a} and {props.b} is {parseInt(props.a)+parseInt(props.b)}</h1>
    );
}
export default Add;