import React, {useState} from "react";
import data from "../data.json"
import {findMaxId} from "./functions";
// import Comment from "./Comment";
// import Reply from "./Reply";
import {Comment, Reply, ReplyWindow, UpdateWindow} from "./index.js"; 

function App() {
  const[currentReplyWindow, setCurrentReplyWindow] = useState(0);
  const [currentUpdateWindow, setCurrentUpdateWindow] = useState(0);
  const [comments, setComments] = useState(data.comments)

  function addComment(text, id) {
    const _maxId = findMaxId(comments);
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
    if(id===0) {
      setComments(prevComments => [...prevComments, newComment]);
      // showReplyWindow(0);
    }
    else{
      const commentToReply = comments.find(comment => {
        if(comment.id === id) {
          return comment
        }
        if(Array.isArray(comment.replies) && comment.replies.length > 0) {
          return comment.replies.find(reply => {
            return reply.id === id
          })
        }
      })
      commentToReply.replies.push(newComment);
      setCurrentReplyWindow();
    }
  }


  function deleteComment(idToRemove, commentsDel=comments) {
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
    if(id === currentReplyWindow) {
      setCurrentReplyWindow(0)
    }
    else{
      setCurrentReplyWindow(id);
    }
  }

  function showUpdateWindow(id) {
    console.log("show", id)
    setCurrentUpdateWindow(id)
  }

  function findComment(id) {
    return comments.find(comment => {
      if(comment.id===id) {
        return comment
      }
      if(Array.isArray(comment.replies)) {
        return comment.replies.find(reply => reply.id===id)
      }
    })
  }

  function updateComment(id, text) {
    const newComments = comments.map(comment => {
      if(comment.id === id) {
        comment.content = text;
      }
      if(Array.isArray(comment.replies)) {
        comment.replies.map(reply => {
          if(reply.id === id) {
            reply.content = text;
          }
          return reply
        })
      }
      return comment;
    })
    setCurrentUpdateWindow(0);
    setComments(newComments);

  }



  console.log("currentUpdateWindow = ", currentUpdateWindow)
  return (
    <div className="container">
      <h1>{currentUpdateWindow}</h1>
      <h2>{new Date().getSeconds()}</h2>
      {comments.map((comment, index) => {
      return(
        <>
          <Comment
            key={index}
            comment={comment}
            currentUser={data.currentUser}
            setCurrentReplyWindow={showReplyWindow}
            setCurrentUpdateWindow={showUpdateWindow}
            currentUpdateWindow={currentUpdateWindow}
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
                setCurrentUpdateWindow={showUpdateWindow}
                currentUpdateWindow={currentUpdateWindow}
                currentReplyWindow={currentReplyWindow}
                addComment={addComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
              />
              
            </>
          })}
        </>
      )
    })}
    {
    (currentReplyWindow===0)? 
      <ReplyWindow currentUser={data.currentUser} addComment={addComment} comment={{id: 0}}/>
    :
      ""
    }
    </div>
  );
}

export default App;