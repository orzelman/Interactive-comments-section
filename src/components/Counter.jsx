import React from "react";
import data from "../data.json";

export default function Counter(props) {
    console.log("counter");
    console.log(props);
    return(<div className="counter">
        <p className="plus-minus">+</p>
        <p className="plus-minus">{props.comment.score}</p>
        <p className="plus-minus">-</p>
    </div>)
}