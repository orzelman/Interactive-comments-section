import React, {useState, useEffect} from "react";
import data from "../data.json"
import {findMaxId} from "./functions";
import {Comment, Reply, ReplyWindow, SelectUser} from "./index.js"; 

function App() {
  const[currentReplyWindow, setCurrentReplyWindow] = useState(0);
  const [currentUpdateWindow, setCurrentUpdateWindow] = useState(0);
  const [comments, setComments] = useState(data.comments);
  const [user, setUser] = useState(data.currentUser);
  const [mobileDesign, setMobileDesign] = useState(window.innerWidth < 769);
  const [localScores, setLocalScores] = useState(() => {
    const maxId = findMaxId(comments);
    const local = {};
    for(let i=0; i<=maxId; i++) {
      local[i] = false;
    }
    return local
  });

  useEffect(() => {
    localStorage.setItem("localScores", JSON.stringify(localScores));
  }, [localScores]);  

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 769;
      setMobileDesign(prev => {
        (prev !== isMobile)? setMobileDesign(isMobile)
        :
        setMobileDesign(prev)
      })
    }
    window.addEventListener('resize', () => handleResize())
  }, []);


  function handleSelectUser(selectedUser) {
    if(user.username !== selectedUser) {
      const newUser= {
        "image": { 
          "png": `./images/avatars/image-${selectedUser}.png`,
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": selectedUser
      }
      setUser(newUser)
    }
    else {}
  }

  function addComment(text, id) {
    const newId = findMaxId(comments) + 1;
    const newComment =     {
      "id": newId,
      "content": text,
      "createdAt": "today",
      "score": 0,
      "user": {
        "image": { 
          "png": user.image.png,
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": user.username
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

    const newScores = JSON.parse(localStorage.getItem("localScores"));
    newScores[newId] = false;
    setLocalScores(newScores)
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
    setCurrentUpdateWindow(id)
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

  function updateScore(id, score) {
    const localScores = (JSON.parse(localStorage.getItem('localScores')))

    if(localScores[id] === false) {
      const newComment = comments.map(comment => {
        if(comment.id === id) {
          comment.score = score
        }
        if(Array.isArray(comment.replies)) {
          comment.replies.map(reply => {
            if(reply.id === id) {
              reply.score = score
            }
            return reply
          })
        }
        return comment
      })
      setComments(newComment);
      localScores[id] = true;
      localStorage.setItem("localScores", JSON.stringify(localScores))
    }
    else {
      return
    }
  }

  return (
    <div className="container">
      <SelectUser selectUser={handleSelectUser}/>
      {comments.map((comment, index) => {
      return(
        <>
          <Comment
            key={index}
            comment={comment}
            currentUser={user}
            setCurrentReplyWindow={showReplyWindow}
            setCurrentUpdateWindow={showUpdateWindow}
            currentUpdateWindow={currentUpdateWindow}
            deleteComment={deleteComment}
            updateComment={updateComment}
            updateScore={updateScore}
            isMobileDesign={mobileDesign}
            />

          {currentReplyWindow===comment.id? <ReplyWindow 
            currentUser={user}
            addComment={addComment}
            comment={comment} 
          /> : ""}
          {comment.replies.map((reply, index) => {
            return<>
              <Reply
                key={index}
                comment={reply}
                currentUser={user}
                setCurrentReplyWindow={showReplyWindow}
                setCurrentUpdateWindow={showUpdateWindow}
                currentUpdateWindow={currentUpdateWindow}
                currentReplyWindow={currentReplyWindow}
                addComment={addComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
                updateScore={updateScore}
                isMobileDesign={mobileDesign}
              />
              
            </>
          })}
        </>
      )
    })}
    {
    (currentReplyWindow===0)? 
      <ReplyWindow currentUser={user} addComment={addComment} comment={{id: 0}}/>
    :
      ""
    }
    </div>
  );
}

export default App;