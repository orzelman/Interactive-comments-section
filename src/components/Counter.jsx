import React, {useState} from "react";

export default function Counter(props) {
    const [points, setPoints] = useState(props.comment.score)
    const handleIncrease = () => {
        console.log("inc");
        setPoints(points + 1)
    }
    const handleDecrease = () => {
        setPoints(points - 1);
    }

    return(
    <div className="counter">
        <p className="plus-minus" onClick={handleIncrease}>+</p>
        <p className="scores">{props.comment.score}</p>
        <p className="plus-minus" onClick={handleDecrease}>-</p>
    </div>)
}