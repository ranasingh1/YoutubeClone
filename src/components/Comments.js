 import React from 'react'

const Comments = ({data}) => {
    const {name, text , replies} = data;
  return(
  <div className='flex shadow-sm rounded bg-gray-100 m-4 '>
   <img 
   className='w-8 h-8 '
   alt='userImg' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
   <div className='px-3'>
    <h4 className='font-bold'> {name}</h4> 
    <p>{text}</p>
   </div>
   </div>)
}

export default Comments