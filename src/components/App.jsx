import React from "react";
import data from "../data.json"
// import Comment from "./Comment";
// import Reply from "./Reply";
import {Comment, Reply} from "./index.js"; 


function App() {
  console.log(data.comments.length)
;  return (
    <div className="container">
      {data.comments.map((comment, index) => {
      return(
        <>
          <Comment key={index} comment={comment} currentUser={data.currentUser}/>
          {comment.replies.map((reply, index) => {
            return(<Reply key={index} comment={reply} currentUser={data.currentUser}/>)
        })}
        </>)
    })}
    </div>
  );
}

export default App;
