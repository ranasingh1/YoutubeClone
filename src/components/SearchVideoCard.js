import React from 'react'

const SearchVideoCard = ({results}) => {
  const {thumbnails, title, channelTitle, publishTime, description}  = results.snippet;
  const timeSincePublished=(publishTime)=> {
    const now = new Date();
    const publishedDate = new Date(publishTime);

    const timeDifference = now - publishedDate;
    const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor(timeDifference / (30 * 24 * 60 * 60 * 1000));

    if (years > 1) {
        return `${years} years ago`;
    } else if (years === 1) {
        return "1 year ago";
    } else if (months > 1) {
        return `${months} months ago`;
    } else if (months === 1) {
        return "1 month ago";
    } else {
        return "Less than a month ago";
    }
}
  return (
    <div className='flex  mx-4 w-full '>
        <div className=' w-1/2 py-2  flex justify-center items-center'>
         <img src={thumbnails.medium.url} className='rounded-lg' alt='thumbanail'/>
        </div>
        <div className='w-1/2 my-4 p-2 flex flex-col '> 
           <h2 className='flex flex-wrap text-start font-bold '>{title}</h2>
           <p className=' text-xs my-1'>{timeSincePublished(publishTime)}</p>
           <p className=' text-xs '>{channelTitle}</p>
           <p className='text-xs flex flex-wrap my-1'>{description}</p>
        </div>
    </div>
  )
}

export default SearchVideoCard