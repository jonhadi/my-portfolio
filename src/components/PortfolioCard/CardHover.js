import React from "react";
import "./style.css";

function CardHover(props) {
    return (
        <div className="dropdown-content" id={props.id}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default CardHover;