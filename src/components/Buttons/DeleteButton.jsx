import React from "react";
import "../../index.css";


export default function DeleteButton(props) {

    return(
        <div className="icon-button delete-button" onClick={props.setIsPopup(true)}>
            <img src="../images/icon-delete.svg"/>
            <span>Delete</span>
        </div>
    )
}