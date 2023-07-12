import React, {useState} from "react";
import data from "../data.json"
// import Comment from "./Comment";
// import Reply from "./Reply";
import {Comment, Reply, ReplyWindow} from "./index.js"; 


function App() {
  const[currentReplyWindow, setCurrentReplyWindow] = useState(0);
  const [comments, setComments] = useState(data.comments)


  function findMaxId(commentsList, currentMaxId=0) {
    let _maxId = currentMaxId;
    commentsList.forEach(comment => {
      if(comment.id > _maxId) {
        _maxId = comment.id;
      }
      if(Array.isArray(comment.replies) && comment.replies.length > 0) {
        const repliesMax = findMaxId(comment.replies)
        if (repliesMax > _maxId) {
          _maxId = repliesMax
        }
      }
    })
    return _maxId;
  };

  function addComment() {
    const _maxId = findMaxId(comments);
    const newComment =     {
      "id": _maxId + 1,
      "content": "Bingo!",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    }
    setComments(prevComments => [...prevComments, newComment])
    console.log("comments: ", comments);
  };




  function showReplyWindow(id) {
    console.log("ustawiam id = ",id);
    setCurrentReplyWindow(id);
  }

  return (
    <div className="container">
      <h1 onClick={addComment}>ready!</h1>
      {comments.map((comment, index) => {
      return(
        <>
          <Comment
            key={index}
            comment={comment}
            currentUser={data.currentUser}
            setCurrentReplyWindow={showReplyWindow}
            />
          {currentReplyWindow===index+1? <ReplyWindow currentUser={data.currentUser}/> : ""}
          {comment.replies.map((reply, index) => {
            return<>
              <Reply
                key={index}
                comment={reply}
                currentUser={data.currentUser}
                currentReplyWindow={currentReplyWindow}
                />
              </>
        })}
        </>)
    })}
    </div>
  );
}

export default App;
