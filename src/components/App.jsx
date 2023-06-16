import React from "react";
import Comment from "./Comment";
import data from "../data.json"
import Reply from "./Reply";


function App() {
  let mobile = true;
  (window.innerWidth >= 750)? mobile = false : mobile=true;

  return (
    <div className="container">
      {data.comments.map((comment, index) => {
      return(
        <>
          <Comment comment={comment} user={data.currentUser.username}/>
          {comment.replies && comment.replies.map(reply => {
            return(<Reply comment={reply} />)
        })}
        </>)
    })}
    </div>
  );
}

export default App;
