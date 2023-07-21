import React from "react";

export default function Counter(props) {
    const localScores = JSON.parse(localStorage.getItem("localScores"));

    const handleIncrease = () => {
        props.updateScore(props.comment.id, props.comment.score + 1)
    }

    const handleDecrease = () => {
        props.updateScore(props.comment.id, props.comment.score - 1)
    }

    const handleMouseEnter = (event) => {
        if(localScores[props.comment.id]) {
            event.target.classList.add("show-info");
        }
    }

    return(
    <div className="counter">
        <p className="plus-minus" onClick={handleIncrease} onMouseEnter={handleMouseEnter}>+</p>
        <p className="scores">{props.comment.score}</p>
        <p className="plus-minus" onClick={handleDecrease} onMouseEnter={handleMouseEnter}>-</p>
    </div>)
}
