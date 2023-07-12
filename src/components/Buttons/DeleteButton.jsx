import React, {useState} from "react";
import "../../index.css";

export default function DeleteButton() {
 
    return(
        <div className="icon-button delete-button">
            <img src="../images/icon-delete.svg"/>
            <span>Delete</span>
        </div>
    )
}