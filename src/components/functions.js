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

export { findMaxId };