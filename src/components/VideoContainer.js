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
    if (jsonData.items && jsonData.items.length > 0) {
      setVideos(jsonData.items);

    }
   }
  return (
    <div className=" mt-14 mb-3 flex flex-wrap justify-center ">
   { videos.length>0 ?( videos.map((video, index)=>{
      return <Link key={index} to={"/watch?v="+ video.id}><VideoCard   info={video}/></Link>  ;
    }
    )):( <div><h1> Daily Request Limit exhausted for YouTube Data API</h1>
              <p>Renews At midnight pacific time</p>
    </div>)}
    </div>
    
  )
}
