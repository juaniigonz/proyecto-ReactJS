import React from "react";


function Button(props){
    
    return(
        <button onClick={props.funcBtn}>
            {props.children || props.text}
        </button>
    )
}

export default Button