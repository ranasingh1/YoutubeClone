import React, { useState } from "react";
import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";



export const CommentsList = ({ comments }) => {
      console.log('rendered')

  return comments?.map((comment, i) => (
    <CommentItem key={comment.id} comment={comment} />
  ));
};
export const MemoizedCommentsList = React.memo(CommentsList, (prevProps, nextProps) => {
  return prevProps.comments === nextProps.comments;
});


const CommentsContainer = () => {
  const commentData = useSelector((store)=>store.comment.comments)
  console.log('Array',commentData);
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
