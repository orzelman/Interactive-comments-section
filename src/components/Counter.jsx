import React from "react";

export default function Counter(props) {
    return(<div className="counter">
        <p className="plus-minus">+</p>
        <p className="scores">{props.comment.score}</p>
        <p className="plus-minus">-</p>
    </div>)
}