import React from 'react';

const addCommasToNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  // Format view count with commas using the custom function
  const formattedViewCount = addCommasToNumber(statistics.viewCount);

  return (
    <div className='w-72 m-2'>
      <img className='rounded-lg' src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <ul>
        <li className='font-bold'>{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{formattedViewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
