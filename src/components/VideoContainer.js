import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../constants/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
   useEffect(()=>{
    getVideos();
   }, [])
   const getVideos = async ()=>{
    const data  = await fetch(YOUTUBE_VIDEO_API);
    const jsonData=await data.json();
    setVideos(jsonData.items);
    console.log(jsonData);
   }
  return (
    <div className=" mt-14 mb-3 flex flex-wrap justify-center ">
   { videos.map((video, index)=>{
      return <Link key={index} to={"/watch?v="+ video.id}><VideoCard   info={video}/></Link>  ;
    }
    )}
    </div>
    
  )
}
