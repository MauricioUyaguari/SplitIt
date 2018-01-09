import * as  CommentApiUtil from '../util/comment_api_util';


export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';




export const receiveComment = (commentData) => {
  return {
    type: RECEIVE_COMMENT,
    comment: commentData.comment,
    author: commentData.author,
    bill: commentData.bill
  };
};



export const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_ALL_COMMENTS
  };
};


export const removeComment = (commentData) => {
  debugger
  return {
  type: REMOVE_COMMENT,
  comment: commentData.comment,
  bill: commentData.bill
};
};





export const createComment = (inputComment) => dispatch => {
  return CommentApiUtil.createComment(inputComment).then(comment => {
    return dispatch(receiveComment(comment));
  });
};



export const fetchComments = () => dispatch => {
  return CommentApiUtil.fetchComments().then(comments => {
    return dispatch(receiveAllComments(comments));
  });
};



export const deleteComment = (inputId) => dispatch => {
  return CommentApiUtil.deleteComment(inputId).then(comment => {
    return dispatch(removeComment(comment));
  });
};
