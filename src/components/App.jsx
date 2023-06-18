import React from "react";
import data from "../data.json"
// import Comment from "./Comment";
// import Reply from "./Reply";
import {Comment, Reply} from "./index.js"; 


function App() {
  let mobile = true;
  (window.innerWidth >= 750)? mobile = false : mobile=true;
  return (
    <div className="container">
      {data.comments.map((comment, index) => {
      return(
        <>
          <Comment key={index} comment={comment} user={data.currentUser}/>
          {comment.replies.map((reply, index) => {
            return(<Reply key={index} comment={reply} user={data.currentUser}/>)
        })}
        </>)
    })}
    </div>
  );
}

export default App;
