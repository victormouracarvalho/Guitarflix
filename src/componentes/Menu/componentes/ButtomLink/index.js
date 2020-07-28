import React from 'react';


function ButtomLink (props){
    //propos => {className: "o qeu alguém passar", href: "  /"}
    console.log(props);  
    return (
        <a href = {props.href} className={props.className}>
            Novo Artigo
        </a>

    );
}

export default ButtomLink;