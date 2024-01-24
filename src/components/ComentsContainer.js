import React from 'react'
import Comments from './Comments';
import { commentData } from '../constants/constants';

const CommentsList = ({comments})=>{
    return comments.map(comment=>(
    <div>
    <Comments data={comment}/>
    <div className='pl-5 ml-5 border-l-black  border-l-2 '>
        <CommentsList comments={comment.replies}/>
    </div>

    </div>
    )) 
    
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList  comments={commentData} />
        </div>
  )
}

export default CommentsContainer;