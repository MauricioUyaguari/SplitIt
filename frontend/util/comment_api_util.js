export const createComment = (comment) => {
  return( $.ajax({
    url: 'api/comments',
    method: 'POST',
    data: {comment}
  })
  );

};
