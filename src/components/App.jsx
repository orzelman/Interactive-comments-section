import React, {useState} from "react";
import data from "../data.json"
import {findMaxId} from "./functions";
// import Comment from "./Comment";
// import Reply from "./Reply";
import {Comment, Reply, ReplyWindow} from "./index.js"; 

function App() {
  const[currentReplyWindow, setCurrentReplyWindow] = useState(0);
  const [comments, setComments] = useState(data.comments)

  function addComment(text, id) {
    const _maxId = findMaxId(comments);
    console.log(text, id)
    const newComment =     {
      "id": _maxId + 1,
      "content": text,
      "createdAt": "1 month ago",
      "score": 0,
      "user": {
        "image": { 
          "png": data.currentUser.image.png,
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": data.currentUser.username
      },
      "replies": []
    }
    // const commentToReply = comments.find(comment => comment.id===id);
    const commentToReply = comments.find(comment => {
      if(comment.id === id) {
        return comment
      }
      if(Array.isArray(comment.replies) && comment.replies.length > 0) {
        comment.replies.find(reply => reply.id === id)
      }
    })
    // commentToReply.replies.push(newComment);
    console.log(commentToReply)
    setCurrentReplyWindow(0);
  }


  function deleteComment(idToRemove, commentsDel=comments) {
    console.log("id = ",idToRemove);
    console.log("comments = ", commentsDel);
    const founded = commentsDel.filter(comment => {
      if(comment.id !== idToRemove) {
        if(Array.isArray(comment.replies) && comment.replies.length > 0) {
          comment.replies = comment.replies.filter(replay => replay.id !== idToRemove)
        return comment
        }
        else {
          return comment
        }
      }
    })
    setComments(founded)
  };


  function showReplyWindow(id) {
    console.log("show reply widow, id=",id)
    setCurrentReplyWindow(id);
  }

  return (
    <div className="container">
      <h1 onClick={addComment}>reay!</h1>
      <h2>{new Date().getSeconds()}</h2>
      {comments.map((comment, index) => {
      return(
        <>
          <Comment
            key={index}
            comment={comment}
            currentUser={data.currentUser}
            setCurrentReplyWindow={showReplyWindow}
            deleteComment={deleteComment}
            />
          {currentReplyWindow===comment.id? <ReplyWindow 
            currentUser={data.currentUser}
            addComment={addComment}
            comment={comment} 
          /> : ""}
          {comment.replies.map((reply, index) => {
            return<>
              <Reply
                key={index}
                comment={reply}
                currentUser={data.currentUser}
                setCurrentReplyWindow={showReplyWindow}
                currentReplyWindow={currentReplyWindow}
                deleteComment={deleteComment}
                />
              </>
        })}
        </>)
    })}
    </div>
  );
}

export default App;
